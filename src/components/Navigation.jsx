"use client";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="bg-blue-700 h-11 py-2 px-3 flex justify-between items-center">
        <div className="brand">
          <h1 className="text-xl font-sans font-bold">
            <Link href={"/"}>Work Manager</Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link href={"/"} className="hover:text-gray-600 ">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/add-tasks"} className="hover:text-gray-600 ">
                addTasks
              </Link>
            </li>
            <li>
              <Link href={"/showtasks"}>Tasks</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-5">
            {/* <li>
              <Link href={"#!"}>Login</Link>
            </li> */}
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
