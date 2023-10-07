import React from "react";
import AddtaskClient from "./AddtaskClient";

export const metadata = {
  title: "Add Tasks",
};

const page = () => {
  //! React naming convection follows this
  return <AddtaskClient />;
};

export default page;
