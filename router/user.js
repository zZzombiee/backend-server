const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { deleteUser } = require("../controller/users/deleteUser");
const { createUser } = require("../controller/users/createUser");
const { updateUser } = require("../controller/users/updateUser");
const { getComments } = require("../controller/comment/getComment");
const { CreateComments } = require("../controller/comment/createComments");
const { updateComments } = require("../controller/comment/updateComments");
const { deleteComment } = require("../controller/comment/deleteComment");

const UserRouter = express.Router();

UserRouter.get("/user", getUsers)
  .get("/user/:id", getUser)
  .post("/createUser", createUser)
  .delete("/deleteUser/:id", deleteUser)
  .put("/updateUser", updateUser)
  .get("/comment", getComments)
  .post("/createComment", CreateComments)
  .put("/updateComment/:id", updateComments)
  .delete("/comment/:id", deleteComment);

module.exports = UserRouter;
