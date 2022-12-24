import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

import connectDB from "@/lib/database";
import UserData from "@/interfaces/userModel";

const bcrypt = require("bcrypt");
const router = useRouter();

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  let result: any;
  switch (req.method) {
    case "POST":
      result = await logUser(req, res);
      res.json(result); // Send the error to the client
      break;
  }
};

async function logUser(req: NextApiRequest, res: NextApiResponse) {
    const conn = connectDB(); // Retrieve the information to be able to connect to the database
    let user: any;
    //let password = await bcrypt.hash(req.body.password, 10);

    try {
      await conn.connect(); // Connect to the database
  
      const database = conn.db("projet-blog"); // Select the database to use
      const sections = database.collection<UserData>("users"); // Select the collection (table)

      console.log(req.body.email, req.body.password);
      user = await sections.findOne(
        {
          email: req.body.email,
        }
      )
      console.log(user);
      if(!user) {
        console.log("fail");
        return "wrong username or password";
      }

      bcrypt.compare(req.body.password, user.password, function(result: boolean){
        if(result == false) {
          console.log("fail");
          return "wrong username or password";
        } else {
          console.log("success");
          router.push("/dnasdnakjd/profile");
          return { success: true, content: user };
        }
      })

    } catch (error) {
      console.log(error); // Log the error
      return { success: false, error: error };
    } finally {
      conn.close(); // Close the connection to the database
    }
  }