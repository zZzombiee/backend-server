const { sql } = require("../../src/database");

exports.postProduct = async (request, response) => {
  const { productName, productPrice } = request.body;
  //   console.log(request.body);
  try {
    const newProduct = await sql`INSERT INTO products(productName,productPrice)
            VALUES (${productName},${productPrice})
            returning *`;
    response
      .status(200)
      .json({ message: "uploaded new product", product: newProduct });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
