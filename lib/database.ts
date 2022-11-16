import { MongoClient } from "mongodb";

// Connect the api to the database
export default function connectDB(): MongoClient {
  const uri = <string>process.env.MONGODB_URI;
  const conn = new MongoClient(uri, { enableUtf8Validation: true });

  return conn;
}