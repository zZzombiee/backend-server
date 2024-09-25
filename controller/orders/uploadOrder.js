import { sql } from "../../src/database";

exports.uploadOrder = async (request, response) => {
  const { productid, customerid, quantity } = request.body;
  try {
    const newOrder = await sql`INSERT INTO orders(productid,customerid,quantity)
            VALUES (${productid},${customerid},${quantity})
            returning orderid`;
    const order =
      await sql`SELECT orders.orderID, orders.quantity, customers.firstName, products.productName
            FROM orders
            INNER JOIN customers ON orders.customerID=customers.customerID
            INNER JOIN products ON orders.productId=products.productID
            WHERE orders.orderID=${newOrder[0].orderid}`;
    response.status(200).json({ message: "Uploaded new order", data: order });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
