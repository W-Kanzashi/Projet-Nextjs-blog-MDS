import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function CheckJwt(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, <string>process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (decoded) {
      return res.status(200).json({ message: decoded });
    }
  });
}
