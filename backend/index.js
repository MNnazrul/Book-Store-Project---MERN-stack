import express from "express";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";

const app = express();
const PORT = process.env.PORT || 3002;
const mongodbURL = process.env.mongoURL;

app.get("/", (req, res) => {
  res.json("working");
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
