const { sql } = require("../../src/database");

exports.getProducts = async (request, response) => {
  const products = await sql`SELECT * FROM products`;
  response.status(200).json({ data: products });
};
