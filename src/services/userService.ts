import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface RegisterParam {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({firstName,lastName,email,password,}: RegisterParam) => {
  // Check if the user already exists
  
  const findUser = await userModel.findOne({ email });
  
  if (findUser) {
    return { data: "User already exists", statusCode: 400 };
  }

  // Create a new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({email,password:hashedPassword,firstName,lastName,});
  //console.log("findUser", {findUser});
  // console.log("newUser", {newUser});
  await newUser.save();

  return { data:generateJWT({firstName,lastName,email}), statusCode: 200 };
};



interface LoginParam {
  email: string;
  password: string;
}
export const login = async ({email,password}: LoginParam) => {
  // Check if the user exists
  const findUser = await userModel.findOne({ email});
  if (!findUser) {
    return { data :"User not found", statusCode: 404 };
  }

  // Check if the password is correct
  const passowrdMatch = await bcrypt.compare(password, findUser.password);
  if (!passowrdMatch) {
    return { data: "Invalid password", statusCode: 401 };
  }
  // Check if the password is correct
  

  return {data: generateJWT({firstName:findUser.firstName,lastName:findUser.lastName,email}), statusCode: 200 };
};

const generateJWT = (data: any) => {
    console.log("data", {data});
  return jwt.sign(data, '6a9ZA0jfaqvWhZD7Bc70qWVdExXkdSDh')
  
  // return jwt.sign(data, process.env.JWT_SECRET || '6a9ZA0jfaqvWhZD7Bc70qWVdExXkdSDh', {
  
  }
