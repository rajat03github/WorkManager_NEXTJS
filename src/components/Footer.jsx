"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-40 bg-blue-800  mt-5">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="font-sens text-2xl">Hey There !</h1>
          <p className="mt-5 py-8 flex">
            This app is made by me , Rajat Kataria. <br /> Based on NEXT.JS
            framework.
          </p>
        </div>
        <div className="text-center">
          <h1>Click here to know more about me</h1>
          <br />
          <ul>
            <li>
              <Link
                className="hover:text-gray-300"
                target="_blank"
                href={"https://github.com/rajat03github"}
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300"
                target="_blank"
                href={"https://www.instagram.com/_rajat03/"}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-300"
                target="_blank"
                href={"https://www.linkedin.com/in/rajat03/"}
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
