// ! This will work as API's

import connectDB from "@/helper/db";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();

//!DATA POST - Create User
const POST = async (req, res) => {
  try {
    //fetch user detail from request

    const { name, email, password } = await req.json(); //Returns promises

    // create user object with mongoDb

    const Createduser = await User.create({
      name,
      email,
      password,
    });

    const response = NextResponse.json(Createduser, {
      status: 201,
    });

    return response;
  } catch (error) {
    return NextResponse.json({
      message: "failed to Create user",
      status: false,
    });
  }
};

// GET
const GET = async (req) => {
  let users = [];

  try {
    users = await User.find();
    const response = NextResponse.json(users);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "error ",
      status: false,
    });
  }
};

export { GET, POST };
