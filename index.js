import express, { json } from "express";
import UserRouter from "./router/user";
const app = express();

app.use(json());

const port = 8080;

app.use(UserRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
