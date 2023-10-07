"use client";

import React, { useState } from "react";
import loginSvg from "../assests/login.svg";
import Image from "next/image";
import axios from "axios";

import { toast } from "react-toastify";
import { server } from "@/helper/axioshelper";

// const metadata = {
//   title: "Add Tasks",
// };

const page = () => {
  //   document.title = metadata.title; //*because this is now a client side

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    //temp solutioon
    userId: "65147bf63edb73a4138bc744",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    //* Validate task data
    try {
      //* const data = await addTask(task); //! this is also a method
      //* console.log(data);

      const { data } = await axios.post(`${server}/api/tasks/`, task);
      console.log(data);
      toast.success("Your Task is Added !", {
        position: "top-left",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not Added !", {
        position: "top-center",
      });
    }
  };

  //! using grid instead of flex, made total 12 grids , and then started the center with 4th grid and spanned that grid in total of 6 columns
  return (
    <div className="grid grid-cols-12 mt-4 justify-center">
      <div className=" col-start-5 col-span-4 p-5">
        <div className="my-8 flex justify-center">
          <Image src={loginSvg} className="w-72 " alt="a login svg" />
        </div>
        <h1 className="text-3xl text-center">Add your task here</h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* task title */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm mb-2 font-medium"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* task content */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm mb-2 font-medium"
            >
              Content
            </label>
            <textarea
              type="text"
              className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-lg"
              id="task_content"
              rows={4}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm mb-2 font-medium"
            >
              Status
            </label>
            <select
              id="task_status"
              className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* actions  button */}
          <div className="mt-4 flex justify-center space-x-3">
            <button className="bg-blue-600 py-2 px-3 rounded-xl hover:bg-blue-900">
              Add Task
            </button>
            <button className="bg-red-500 py-2 px-3 rounded-xl hover:bg-red-800">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
