import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.json("working");
});

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
