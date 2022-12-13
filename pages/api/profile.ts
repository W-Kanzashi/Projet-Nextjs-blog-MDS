import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

import connectDB from "@/lib/database";

import UserData from "@/interfaces/Sections";

async function updateProfileData(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database
    const userId = new ObjectId(req.body); // Create a new ObjectId from the id passed in the query string (req.query.id

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection<UserData>("profile"); // Select the collection (table)
    result = await sections.updateOne(
      {
        _id: userId,
        name: req.body.name,
        email: req.body.email,
        list: req.body.list,
      },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          list: req.body.list,
        },
      }
    ); // Find user by userId in the collection profile
    console.log(result);
  } catch (error) {
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    await conn.close();
    return { success: true, content: result };
  }
}

async function getProfileData(req: NextApiRequest, res: NextApiResponse) {
  type SectionInfo = Pick<UserData, "_id">; // Pick the title property from the UserData interface
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  let result: any;

  try {
    await conn.connect(); // Connect to the database
    const userId = new ObjectId(req.body); // Create a new ObjectId from the id passed in the query string (req.query.id

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection<SectionInfo>("profile"); // Select the collection (table)
    result = await sections.findOne<SectionInfo>({
      _id: userId,
    }); // Find user by userId in the collection profile
    console.log(result);
    res.status(200).json({ success: true, content: result }); // Send the result to the client
  } catch (error) {
    console.log(error); // Log the error
    res.status(400).json({ success: false, error: error }); // Send the error to the client
  } finally {
    conn.close();
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let result: any;
  switch (req.method) {
    case "POST":
      result = await getProfileData(req, res);
      res.json(result); // Send the error to the client
      break;
    case "UPDATE":
      result = await updateProfileData(req, res);
      res.json(result);
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
