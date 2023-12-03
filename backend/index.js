import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import BookRouter from "./routes/booksRoute.js";
const app = express();
const PORT = process.env.PORT || 3002;
const mongodbURL = process.env.mongoURL;
import cors from "cors";

app.use(express.json());

app.get("/", (req, res) => {
  res.json("working");
});

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

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
