import express, { request, response } from "express";

import { sql } from "../database";

export const customersRouter = express.Router();

customersRouter.get("/", async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
});

customersRouter.post("/", async (request, response) => {
  const { firstName, lastName, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (firstName, lastName, email, address)
            VALUES (${firstName}, ${lastName}, ${email}, ${address})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

customersRouter.delete("/", async (request, response) => {
  const { id } = request.body;
  await sql`DELETE FROM customers WHERE customerid=${Number(id)};`;
  response.send(`${id} customer has removed`);
});

customersRouter.put("/", async (request, response) => {
  const { id, firstName } = request.body;
  await sql`UPDATE customers
            SET firstName = ${firstName}
            WHERE customerid = ${Number(id)}`;
  response.send("ok");
});
