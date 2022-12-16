import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import UserData from "@/interfaces/Sections";

export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("user"); // Select the collection (table)
    result = await sections.insertOne({
      
    })
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    res.json({ message: "201", success: false, error: error }); // Send the error to the client
  } finally {
    conn.close();
    res.json({ message: "201", success: true, content: result }); // Send the result to the client
  }
}
