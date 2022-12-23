import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import UserData from "@/interfaces/userModel";

const bcrypt = require("bcrypt");

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  let result: any;
  switch (req.method) {
    case "POST":
      result = await createUser(req, res);
      res.json(result); // Send the error to the client
      break;
    case "GET":
      result = await getUsers(req, res);
      res.json(result);
      break;
  }
};

async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retrieve the information to be able to connect to the database
  let newUser: any;
  let password = await bcrypt.hash(req.body.password, 10);

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection<UserData>("users"); // Select the collection (table)
    newUser = await sections.insertOne(
      {
        name: req.body.lastName,
        surname: req.body.firstName,
        email: req.body.email,
        password: password
      }
    )
    return { success: true, content: result };
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    conn.close();
  }
}

async function getUsers(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retrieve the information to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const userList = database.collection<UserData>("users"); // Select the collection (table)
    result = await userList.find({}, {name: 1, surname: 1}); // get all users names and surname
    console.log(result);
    return { success: true, content: result };

  } catch (error) {
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    conn.close();
  }
}
