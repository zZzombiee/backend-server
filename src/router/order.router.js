import express from "express";
import { getOrders } from "../../controller/orders/getOrders";
import { uploadOrder } from "../../controller/orders/uploadOrder";
import { joinOrder } from "../../controller/orders/joinOrder";
export const orderRouter = express.Router();

orderRouter
  .get("/", getOrders)
  .post("/", uploadOrder)
  .get("/orders", joinOrder);
