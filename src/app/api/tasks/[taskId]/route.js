//api/tasks/:taskId

import { errorMessage } from "@/helper/errorMessage";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

//* get all tasks for that id
export const GET = async (req, { params }) => {
  try {
    const { taskId } = params;

    const task = await Task.findById(taskId);

    return NextResponse.json(task);
  } catch (error) {
    return errorMessage("Some error Occured");
  }
};

//* put  for that id
export const PUT = async () => {};

//* delete  for that id
export const DELETE = async () => {};
