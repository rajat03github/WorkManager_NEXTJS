import React from "react";

export const metadata = {
  title: "Add Tasks ",
};
const page = () => {
  //! using grid instead of flex, made total 12 grids , and then started the center with 4th grid and spanned that grid in total of 6 columns
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="border col-start-4 col-span-6 border-red-600 p-5">
        <h1>Add your task here</h1>
      </div>
    </div>
  );
};

export default page;
