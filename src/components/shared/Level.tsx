import React from "react";

const Level = ({
  children
}: {
  children?: JSX.Element | JSX.Element[];
}): JSX.Element => {
  return (
    <div className="flex flex-col justify-around text-white md:flex-row">
      {children}
    </div>
  );
};

export default Level;
