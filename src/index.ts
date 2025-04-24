import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import productRoute from "./routes/productRoute";

const app = express();
const PORT = 3000;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
app.use("/user", userRoute);
app.use("/product", productRoute);

seedInitialProducts()

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
