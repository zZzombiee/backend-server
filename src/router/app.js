import express from "express";
import { getPgVersion } from "../database/index.js";
const app = express();

app.use(express.json());

const port = 8080;

getPgVersion();

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
