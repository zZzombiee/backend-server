import { sql } from "../../src/database/index";

exports.deleteCustomer = async (request, response) => {
  const { id } = request.params;
  await sql`DELETE FROM customers WHERE customerid=${Number(id)};`;
  response.send(`${id} customer has removed`);
};
