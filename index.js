const express = require("express");
const UserRouter = require("./router/user");
const app = express();

app.use(express.json());

const port = 8080;

app.use(UserRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
