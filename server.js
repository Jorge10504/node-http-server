const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Albert Einstein!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating Messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
