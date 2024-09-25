import { sql } from "../../src/database";

exports.joinOrder = async (request, response) => {
  const { orderID } = request.body;
  try {
    const joins =
      await sql`SELECT orders.orderID, orders.quantity, customers.firstName, products.productName
            FROM orders
            INNER JOIN customers ON orders.customerID=customers.customerID
            INNER JOIN products ON orders.productId=products.productID`;
    response.status(200).json({ data: joins });
  } catch {
    response.status(400).json({ message: "NO!" });
  }
};
