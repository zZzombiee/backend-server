import express from "express";
import { customersRouter } from "./src/router/customer.router";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
