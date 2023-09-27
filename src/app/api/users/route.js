// ! This will work as API's

import connectDB from "@/helper/db";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connectDB();

//!DATA POST - Create User
const POST = async (request) => {
  try {
    //fetch user detail from request

    const { name, email, password } = await request.json(); //Returns promises

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
    console.log(error);
    return NextResponse.json({
      message: "failed to Create user",
      status: false,
    });
  }
};

const GET = (request) => {
  const users = [
    {
      name: "rajat don",
      phone: "232313",
      email: "dsadDDADQ222asd@mail.com",
    },
    {
      name: "DSDASDAS don",
      phone: "232313",
      email: "dsadasd@mail.com",
    },
    {
      name: "rajaDR3R3R3t don",
      phone: "23231SDDD3",
      email: "dsadaDDDDDsd@mail.com",
    },
  ];

  return NextResponse.json(users);
};

const DELETE = (request) => {
  console.log("Delete API");
  return NextResponse.json(
    {
      success: true,
      message: "deleted",
    },
    { status: 201, statusText: "Deleted" }
  );
};
const PUT = () => {};

export { GET, POST, DELETE, PUT };
