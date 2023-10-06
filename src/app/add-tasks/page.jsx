import React from "react";
import loginSvg from "../assests/login.svg";
import Image from "next/image";

export const metadata = {
  title: "Add Tasks ",
};
const page = () => {
  //! using grid instead of flex, made total 12 grids , and then started the center with 4th grid and spanned that grid in total of 6 columns
  return (
    <div className="grid grid-cols-12 mt-4 justify-center">
      <div className=" col-start-5 col-span-4 p-5">
        <div className="my-8 flex justify-center">
          <Image src={loginSvg} className="w-72 " />
        </div>
        <h1 className="text-3xl text-center">Add your task here</h1>

        <form action="#!">
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
            >
              <option value="none" selected disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {/* actions  button */}
          <div className="mt-4 flex justify-center space-x-3">
            <button className="bg-blue-600 py-2 px-3 rounded-xl hover:bg-blue-900">
              Add Todo
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
