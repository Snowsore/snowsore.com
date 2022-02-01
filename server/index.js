// snowsore.com test server

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "good" });
});

app.listen(8080, () => {
  console.log("Server start at 8080");
});
