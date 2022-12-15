import { NextApiRequest, NextApiResponse } from "next";

import connectDB from "@/lib/database";

import Sections from "@/interfaces/UserProfile";

export default async function getHomeData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  type SectionInfo = Pick<Sections, "title">; // Pick the title property from the Sections interface
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("portfolio"); // Select the database to use
    const sections = database.collection<SectionInfo>("sections"); // Select the collection (table)
    result = await sections.find<SectionInfo>({}).toArray(); // Find all documents in the collection
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error
    res.json({ message: "201", success: false, error: error }); // Send the error to the client
  } finally {
    conn.close();
    res.json({ message: "201", success: true, content: result }); // Send the result to the client
  }
}
