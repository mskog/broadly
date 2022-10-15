import React from "react";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

const LoadingFull = (): JSX.Element => {
  return (
    <div className="fixed top-0 left-0 z-50 block w-full h-full opacity-75 bg-blue">
      <span
        className="relative block w-0 h-0 mx-auto my-0 text-gray-200 opacity-75 top-1/2 fa-layers"
        style={{ top: "50%" }}
      >
        <ArrowPathIcon className="w-16 h-16 animate-spin" />
      </span>
    </div>
  );
};

export default LoadingFull;
