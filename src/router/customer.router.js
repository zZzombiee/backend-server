import express from "express";

import { getCustomers } from "../../controller/customers/getCustomers";
import { getCustomer } from "../../controller/customers/getCustomer";
import { postCustomer } from "../../controller/customers/postCustomer";
import { deleteCustomer } from "../../controller/customers/deleteCustomer";
import { putCustomer } from "../../controller/customers/putCustomer";

export const customersRouter = express.Router();

customersRouter
  .get("/", getCustomers)
  .post("/", postCustomer)
  .delete("/:id", deleteCustomer)
  .put("/:id", putCustomer)
  .get("/:id", getCustomer);
