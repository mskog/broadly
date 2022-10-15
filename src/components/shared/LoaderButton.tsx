import React, { useState } from "react";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

const LoaderButton = ({
  onClick,
  className,
  children
}: {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const handle = () => {
    setLoading(true);
    onClick();
  };

  let label;
  if (loading) {
    label = <ArrowPathIcon className="animate-spin h-6 w-6" />;
  } else {
    label = children;
  }

  const fullClassName = `${className} focus:outline-none flex justify-center`;

  return (
    <button type="button" className={fullClassName} onClick={handle}>
      {label}
    </button>
  );
};

export default LoaderButton;
