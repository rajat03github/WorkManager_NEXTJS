import User from "@/models/userModel";
import { NextResponse } from "next/server";

//! DELETE USER
export const DELETE = async (request, { params }) => {
  console.log(params);
  const { userId } = params;
  try {
    await User.deleteOne({ _id: userId });

    return NextResponse.json({
      message: `Deleted User ${userId}`,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in Deleting",
    });
  }
};

//! Get Single User

export const GET = async (req, { params }) => {
  try {
    const { userId } = params;

    const user = await User.findById(userId).select("-password");

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
};

//! Update User

export const PUT = async (req, { params }) => {
  try {
    const { userId } = params;

    const { name, password } = await req.json();

    const updatedUser = await User.findByIdAndUpdate(userId, {
      name,
      password,
    }).select("-password");

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "FAILED TO UPDATE",
    });
  }
};
