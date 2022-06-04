import type {NextApiRequest, NextApiResponse} from "next";
import {connectDB} from "../../../../lib/mongodb.config";
import User from "../../../../models/structures/User.structure";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {query:{individual}, method} = req;

  await connectDB();

  if (method === "PUT") {
    try {
      const user = await User.findByIdAndUpdate(individual, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  }

  if(method === "DELETE") {
    try {
      const user = await User.findByIdAndDelete(individual);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error deleting user" });
    }
  }
}

export default handler;