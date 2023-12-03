import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
const app = express();
const PORT = process.env.PORT || 3002;
const mongodbURL = process.env.mongoURL;

app.get("/", (req, res) => {
  res.json("working");
});

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return req.status(300).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

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
