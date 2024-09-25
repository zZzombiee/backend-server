import { sql } from "../../src/database/index";

exports.putCustomer = async (request, response) => {
  const { firstName } = request.body;
  const { id } = request.params;
  await sql`UPDATE customers
              SET firstName = ${firstName}
              WHERE customerid = ${Number(id)}`;
  response.send("ok");
};
