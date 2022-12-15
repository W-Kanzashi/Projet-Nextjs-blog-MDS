import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default async function CheckJwt(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.body;
  console.log("token : " + token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(
    token,
    <string>process.env.JWT_SECRET,
    (err: any, decoded: any) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
      if (decoded) {
        return res.status(200).json(decoded);
      }
    }
  );
}
