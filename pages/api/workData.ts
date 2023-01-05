import { NextApiRequest, NextApiResponse } from "next"; // typescript

import connectDB from "@/lib/database";

import { ObjectId } from "mongodb"; //mechanisme de gestion // like id in sql

export default async function getHomeData(
  req: NextApiRequest, //what we receive
  res: NextApiResponse //what we send
) {
 
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
 
  try {
    await conn.connect(); // Connect to the database

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("work"); // Select the collection (table)
    const result = await sections.find({}).toArray(); // Find all documents in the collection
    console.log(result); // the content of the database
    res.status(200).json(result); // Send the result to the client / 200 OK
  } catch (error) {
    conn.close(); // Close the connection to the database
    console.log(error); // Log the error in the terminal 
    res.status(400).json(error); // Send the error to the client not found
  } finally {
    conn.close(); //excuted all the time /close the connection 
  }
}
// it doesn't count for images 
async function updateWorkData(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  
  try {
    await conn.connect(); // Connect to the database
    const userId = new ObjectId(req.body._id); // Create a new ObjectId from the id passed in the query string (req.query.id

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("work"); // Select the collection (table)
   const result = await sections.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {   //pour mettre à jour title et text
          title: req.body.title,
          text: req.body.text,
        },
      }
    ); // Find user by userId in the collection profile
    console.log(result);
    return { success: true, content: result };
  } catch (error) {
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    await conn.close();
  }
}
async function DeleteWorkData(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); // Retreive the inforamtion to be able to connect to the database
  

   try {
    await conn.connect(); // Connect to the database
    const userId = new ObjectId(req.body._id); // Create a new ObjectId from the id passed in the query string (req.query.id

    const database = conn.db("projet-blog"); // Select the database to use
    const sections = database.collection("work"); // Select the collection (table)
   const result = await sections.deleteOne(
      {
        _id: userId,
      },
    ); // Find user by userId in the collection profile
    console.log(result);
    return { success: true, content: result };
  } catch (error) {
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    await conn.close();
  }

}