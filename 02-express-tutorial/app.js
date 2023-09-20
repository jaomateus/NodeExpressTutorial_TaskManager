const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(5500, () => {
  console.log("server is listening on port 5500");
});
