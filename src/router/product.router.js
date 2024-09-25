import express from "express";
import { getProducts } from "../../controller/products/getProducts";
import { postProduct } from "../../controller/products/postProduct";

export const productRouter = express.Router();

productRouter.get("/", getProducts).post("/", postProduct);
