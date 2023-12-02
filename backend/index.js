const express = require("express");
const PORT = require("./config.js");

const app = express();

app.listen(PORT, () => {
  console.log(`App is running to port : ${PORT}`);
});
