import productModel from "../models/productModel";

export const getAllProducts = async () => {
  const products = await productModel.find({}).sort({ createdAt: -1 });
  return { data: products, statusCode: 200 };
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Product 1",
      image: "https://via.placeholder.com/150",
      price: 10,
      stock: 100,
    },
    {
      title: "Product 2",
      image: "https://via.placeholder.com/150",
      price: 20,
      stock: 200,
    },
    {
      title: "Product 3",
      image: "https://via.placeholder.com/150",
      price: 30,
      stock: 300,
    },
    {
        title: "Product 4",
        image: "https://via.placeholder.com/150",
        price: 30,
        stock: 300,
      },
      {
        title: "Product 5",
        image: "https://via.placeholder.com/150",
        price: 30,
        stock: 300,
      },
  ];
  const existingProducts = await productModel.find({});
 // console.log("existingProducts", { existingProducts });
  if (existingProducts.length === 0) {
    console.log("No products found, seeding initial products...");
    await productModel.insertMany(products);
    return { data: "Products seeded successfully", statusCode: 200 };
  }
 // console.log("lenght", { length: products.length });
  return { data: "Products already seeded", statusCode: 400 };
};
