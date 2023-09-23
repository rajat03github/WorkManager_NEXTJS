import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>This is Profile Header</h1>
      <h1>This is pr {children}</h1>
    </div>
  );
};

export default layout;
