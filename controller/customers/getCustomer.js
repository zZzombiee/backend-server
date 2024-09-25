import { request } from "express";
import { sql } from "../../src/database/index";

exports.getCustomer = async (request, response) => {
  const { id } = request.params;
  const customer = await sql`SELECT * FROM customers WHERE customerID=${Number(
    id
  )}`;

  response.status(200).json({
    data: customer,
  });
};
