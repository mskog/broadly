import React from "react";

import { Link } from "react-router-dom";

type CategoryProps = {
  name: string;
  active: boolean;
  baseRoute: string;
};

const Category = ({ name, active, baseRoute }: CategoryProps): JSX.Element => {
  let classNames =
    "flex-1 text-base font-bold text-center cursor-pointer hover:text-white pb-2";

  if (active) {
    classNames += " text-white border-b-2 border-gray-600";
  } else {
    classNames += " text-blue-700";
  }

  return (
    <li key={name} className={classNames}>
      <Link to={`/${baseRoute}/${name}`} className="capitalize">
        {name}
      </Link>
    </li>
  );
};

export default Category;
