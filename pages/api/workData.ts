import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import Sections from "@/interfaces/Sections";

export default async function getHomeData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type SectionInfo = Pick<Sections, "title">;// Pick the title property from the Sections interface
  // type SectionInfo1 = Pick<Sections, "text">; 
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("work"); // Select the collection (table)
    result = await sections.find({}).toArray(); // Find all documents in the collection
    console.log(result);
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    res.json({ message: "201", success: false, error: error }); // Send the error to the client
  } finally {
    conn.close();
    res.json({ message: "201", success: true, content: result }); // Send the result to the client
  }
}



