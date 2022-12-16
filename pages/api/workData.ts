import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import Sections from "@/interfaces/UserProfile";

export default async function getHomeData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // type SectionInfo1 = Pick<Sections, "text">;
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("work"); // Select the collection (table)
    result = await sections.find({}).toArray(); // Find all documents in the collection
    console.log(result);
    res.status(200).json(result); // Send the result to the client
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    res.status(400).json(error); // Send the error to the client
  } finally {
    conn.close();
  }
}
