import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import BookRouter from "./routes/booksRoute.js";
const app = express();
const PORT = process.env.PORT || 3002;
const mongodbURL = process.env.mongoURL;

app.use(express.json());

app.get("/", (req, res) => {
  res.json("working");
});

app.use("/books", BookRouter);

mongoose
  .connect(mongodbURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
      console.log(`Mongodb is connected`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
