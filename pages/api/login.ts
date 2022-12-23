import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import UserData from "@/interfaces/userModel";

const bcrypt = require("bcrypt");

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
    let password = await bcrypt.hash(req.body.password, 10);

    try {
      await conn.connect(); // Connect to the database
  
      const database = conn.db("projet-blog"); // Select the database to use
      const sections = database.collection<UserData>("users"); // Select the collection (table)

      user = await sections.findOne(
        {
          email: req.body.email,
          password: password
        }
      )
      // if(!user) {
      //   console.log("fail");
      //   return res.json({message: "wrong username or password"});
      // } else {
      //   console.log("success");
      //   return res.redirect('/profile');
      // }
    } catch (error) {
      conn.close(); // Close the connection to the database
      console.log(error); // Log the error
      res.json({ message: "wrong username or password", success: false, error: error }); // Send the error to the client
    } finally {
      conn.close();
      console.log("success");
      res.json({ message: "201", success: true, content: user }); // Send the result to the client
    }
  }