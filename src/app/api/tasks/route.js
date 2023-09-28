//! EXPORT FUNCTIONS

import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

//* get all tasks
const GET = async (request) => {
  try {
    let tasks = [];
    tasks = await Task.find();

    return NextResponse.json(tasks, {
      message: "DONE",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "error",
    });
  }
};

//* create  all tasks
const POST = async (request) => {
  try {
    const { title, content, userId } = await request.json();

    const taskCreated = await Task.create({
      title,
      content,
      userId,
    });
    return NextResponse.json(taskCreated, {
      status: 201,
      message: "DONE",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed To Create Task",
      success: false,
    });
  }
};

export { GET, POST };
