import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import users from "./Routes/users";
import categories from "./Routes/categories";
import { MongoHelper } from "./Configs/DbConfig/dbconnect";

const MONGO_URL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const PORT = 5000;

app.listen(PORT, async () => {
  try {
    await MongoHelper.connect(MONGO_URL);
  } catch (error: any) {
    console.log(error.message);
  }
  console.log(`Server running on port ${PORT}`);
});
// add extended url parsing
app.use(express.urlencoded({ extended: true }));
// add json parsing
app.use(express.json());

app.use("/api", users);
app.use("/api", categories);
app.get("/", async (_req, res) => {
  res.status(200).send({ success: true, message: "Welcome to The Guardian API" });
});

module.exports = app;