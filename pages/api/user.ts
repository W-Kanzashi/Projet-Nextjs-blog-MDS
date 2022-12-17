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
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    res.json({ message: "201", success: false, error: error }); // Send the error to the client
  } finally {
    conn.close();
    res.json({ message: "201", success: true, content: newUser }); // Send the result to the client
  }
}
