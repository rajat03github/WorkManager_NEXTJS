"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import signup from "../assests/signup.svg";

const SignupClient = () => {
  return (
    <div className="grid grid-cols-12 mt-4">
      <div className=" col-start-5 col-span-4">
        <div className="py-2">
          <div className="my-8 flex justify-center">
            <Image src={signup} alt="singup svg" className="w-72 " />
          </div>
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="#!" className="mt-5">
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm mb-2 font-medium ps-2"
              >
                Username
              </label>
              <input
                id="user_name"
                className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
                type="text"
              />
            </div>
            {/* EMAIL */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm mb-2 font-medium ps-2"
              >
                Email
              </label>
              <input
                id="user_email"
                className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
                type="email"
              />
            </div>
            {/* Password */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm mb-2 font-medium ps-2"
              >
                Password
              </label>
              <input
                id="user_password"
                className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
                type="password"
              />
            </div>

            {/* actions  button */}
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-blue-600 py-2 px-3 rounded-xl hover:bg-blue-900">
                Sign Up
              </button>
              <Link href={"/login"}>
                <button className="bg-sky-500 py-2 px-3 rounded-xl hover:bg-sky-800">
                  Already a User ?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupClient;
