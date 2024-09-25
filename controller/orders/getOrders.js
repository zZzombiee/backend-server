import { sql } from "../../src/database/index";

exports.getOrders = async (_request, response) => {
  const orders = await sql`SELECT * FROM orders`;

  try {
    response.status(200).json({
      data: orders,
    });
  } catch {
    response.status(400).json({ message: "aldaa" });
  }
};
