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

//* update task for that id
export const PUT = async (req, { params }) => {
  try {
    const { taskId } = params;

    const { title, content, status } = await req.json();

    const task = await Task.findByIdAndUpdate(taskId, {
      title,
      content,
      status,
    });

    return NextResponse.json(task);
  } catch (error) {
    return errorMessage("Some error Occured");
  }
};

//* delete  for that id
export const DELETE = async (req, { params }) => {
  try {
    const { taskId } = params;

    const task = await Task.findByIdAndDelete(taskId);

    return NextResponse.json({
      message: "Deleted",
    });
  } catch (error) {
    return errorMessage("Some error Occured");
  }
};
