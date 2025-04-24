import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  title: string;
  image: string;
  price: number;
  stock: number;
}

const productSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
);
const productModel = mongoose.model<IProduct>("product", productSchema);
export default productModel;
// import mongoose, { Document, Schema } from "mongoose";
