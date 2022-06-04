import { connect, connection } from "mongoose";

const mongo = process.env.MONGODB_URI;

if(!mongo){
  throw new Error("There is not mongo uri available");
}

export const connectDB = async (): Promise<void> => {
  const db = await connect(process.env.MONGODB_URI ?? "");
  db.connections[0].readyState;
};

connection.on("connected", () =>
  console.log("MongoDB is connected")
);

connection.on("error", (err) =>
  console.log(err)
);
