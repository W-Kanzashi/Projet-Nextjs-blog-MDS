import { NextApiRequest, NextApiResponse } from "next"; // typescript

import connectDB from "@/lib/database";

import { ObjectId } from "mongodb"; // id in sql

export default async function getHomeData(
  req: NextApiRequest, 
  res: NextApiResponse 
) {
 
  const conn = connectDB(); 
 
  try {
    await conn.connect(); 

    const database = conn.db("projet-blog"); 
    const sections = database.collection("work"); 
    const result = await sections.find({}).toArray(); 
    console.log(result); 
    res.status(200).json(result); 
  } catch (error) {
    conn.close(); 
    console.log(error); 
    res.status(400).json(error); 
  } finally {
    conn.close(); //excuted all the time /close the connection 
  }
}
// it doesn't count for images 
async function updateWorkData(req: NextApiRequest, res: NextApiResponse) {
  const conn = connectDB(); 
  
  try {
    await conn.connect(); 
    const userId = new ObjectId(req.body._id); // Create a new ObjectId from the id passed in the query string (req.query.id

    const database = conn.db("projet-blog"); 
    const sections = database.collection("work"); 
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
    ); 
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
  const conn = connectDB();
  

   try {
    await conn.connect(); 
    const userId = new ObjectId(req.body._id); 

    const database = conn.db("projet-blog"); 
    const sections = database.collection("work"); 
   const result = await sections.deleteOne(
      {
        _id: userId,
      },
    ); 
    console.log(result);
    return { success: true, content: result };
  } catch (error) {
    console.log(error); // Log the error
    return { success: false, error: error };
  } finally {
    await conn.close();
  }

}