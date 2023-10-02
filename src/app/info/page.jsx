"use client"; // This will make this client side component
import React from "react";

const Info = () => {
  console.log(`This is Component`); //if this come in server side then it is server side

  return (
    <div>
      <h1>This is info</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
        voluptatum aspernatur ad voluptates amet consequuntur error blanditiis,
        eius numquam similique facere maxime voluptas! Dignissimos laudantium
        sed pariatur, asperiores aliquid eveniet?
      </p>
      <button className="px-3 my-2 py-3 bg-blue-300">click here</button>
    </div>
  );
};

export default Info;
