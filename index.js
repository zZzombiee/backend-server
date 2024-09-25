import express from "express";
import { customersRouter } from "./src/router/customer.router";
import { orderRouter } from "./src/router/order.router";
import { productRouter } from "./src/router/product.router";

const app = express();

app.use(express.json());

const port = 8080;

app.use("/customers", customersRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
