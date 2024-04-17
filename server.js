const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();
const PORT = 3000;

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
app.post("/friends", friendsController.postFriend);
// GET handler function to the entire friends endpoint
app.get("/friends", friendsController.getFriends);
// GET handler function to retrieve the information of a single friend
app.get("/friends/:friendId", friendsController.getFriend);

// GET handler function to retrieve the messages endpoint information
app.get("/messages", messagesController.getMessages);
// POST handler function to include a new message
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
