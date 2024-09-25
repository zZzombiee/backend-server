import { sql } from "../../src/database/index";

exports.getCustomers = async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
};
