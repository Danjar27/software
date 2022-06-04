import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/mongodb.config";
import User from "../../../models/schemas/User";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  await connectDB();

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch {
      res.status(500).json({ message: "Error getting users" });
    }
  }

  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }
}

export default handler;