import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoadingFull() {
  return (
    <div className="fixed top-0 left-0 z-50 block w-full h-full opacity-75 bg-blue">
      <span
        className="relative block w-0 h-0 mx-auto my-0 text-gray-200 opacity-75 top-1/2 fa-layers"
        style={{ top: "50%" }}
      >
        <FontAwesomeIcon className="fa-5x" icon={faSpinner} spin />
      </span>
    </div>
  );
}
