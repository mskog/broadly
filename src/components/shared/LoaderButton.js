import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function LoaderButton({ onClick, className, children }) {
  const [loading, setLoading] = useState(false);

  const handle = () => {
    setLoading(true);
    onClick();
  };

  let label;
  if (loading) {
    label = <FontAwesomeIcon className="fa" icon={faSpinner} spin />;
  } else {
    label = children;
  }

  const fullClassName = `${className} focus:outline-none`;

  return (
    <button type="button" className={fullClassName} onClick={handle}>
      {label}
    </button>
  );
}
