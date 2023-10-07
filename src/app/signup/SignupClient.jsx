"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import signup from "../assests/signup.svg";
import axios from "axios";
import { server } from "@/helper/axioshelper";
import { toast } from "react-toastify";

const SignupClient = () => {
  const [signUpdata, setSignUpdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const doSignUp = async (event) => {
    try {
      event.preventDefault();

      if (
        signUpdata.name === "" ||
        signUpdata.email === "" ||
        signUpdata.password === ""
      ) {
        return toast.warning("All fields are REQUIRED", {
          position: "top-right",
        });
      }

      const { data } = await axios.post(
        `
        ${server}/api/users
      `,
        signUpdata
      );
      console.log(data);
      toast.success("Welcome", {
        position: "top-left",
      });

      // setSignUpdata({
      //   name: "",
      //   email: "",
      //   password: "",
      // });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 mt-4">
      <div className=" col-start-5 col-span-4">
        <div className="py-2">
          <div className="my-8 flex justify-center m-5">
            <Image src={signup} alt="singup svg" className="w-44 " />
          </div>
          <h1 className="text-3xl text-center">Signup Here</h1>
          <form action="#!" className="mt-5" onSubmit={doSignUp}>
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm mb-2 font-medium ps-2"
              >
                Username
              </label>
              <input
                name="user_name"
                id="user_name"
                className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
                type="text"
                //! if name value changes then field will also changes,
                value={signUpdata.name}
                onChange={(event) => {
                  setSignUpdata({
                    ...signUpdata,
                    name: event.target.value,
                  });
                }}
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
                value={signUpdata.email}
                onChange={(event) => {
                  setSignUpdata({
                    ...signUpdata,
                    email: event.target.value,
                  });
                }}
                name="user_email"
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
                name="user_password"
                value={signUpdata.password}
                onChange={(event) => {
                  setSignUpdata({
                    ...signUpdata,
                    password: event.target.value,
                  });
                }}
                id="user_password"
                className="w-full p-1.5 bg-gray-800 focus:ring-gray-400 border border-gray-800 rounded-3xl"
                type="password"
              />
            </div>

            {/* actions  button */}
            <div className="mt-4 flex justify-center space-x-3">
              <button
                type="submit"
                className="bg-blue-600 py-2 px-3 rounded-xl hover:bg-blue-900"
              >
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
