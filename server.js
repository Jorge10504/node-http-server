const express = require("express");
const app = express();
const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Albert Einstein",
  },
  {
    id: 1,
    name: "Sir Isaac Newton",
  },
];

// Middleware function to log the request made, the endpoint and the milliseconds
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

// Middleware function to convert incoming requests into JSON
app.use(express.json());

// POST method handler function to check the request and create a new friend
app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name...",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.json(newFriend);
});

// GET handler function to the entire friends endpoint
app.get("/friends", (req, res) => {
  res.json(friends);
});

// GET handler function to retrieve the information of a single friend
app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "The friend id is not valid.",
    });
  }
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
