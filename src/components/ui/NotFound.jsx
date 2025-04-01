import React from "react";
import Not_found from "./404.jpg";

const NotFound = () => (
  <div className="flex justify-center items-center min-h-screen p-4">
    <img
      src={Not_found}
      alt="404 Error"
      className="w-full md:w-3/4 lg:w-1/2 max-w-4xl h-auto transition-all duration-300"
    />
  </div>
);

export default NotFound;
