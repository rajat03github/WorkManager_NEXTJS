import { errorMessage } from "@/helper/errorMessage";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { userId } = params;

    const tasks = await Task.find({
      userId: userId,
    }); // UserId present in that task model

    return NextResponse.json(tasks);
  } catch (error) {
    return errorMessage("Internal Issue");
  }
};
