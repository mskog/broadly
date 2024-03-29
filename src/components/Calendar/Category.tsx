import React from "react";
import capitalize from "lodash/capitalize";

import { Link } from "react-router-dom";

type CategoryProps = {
  name: string;
  active: boolean;
};

const Category = ({ name, active }: CategoryProps): JSX.Element => {
  let classNames =
    "flex-1 text-base font-bold text-center cursor-pointer hover:text-white pb-2";

  if (active) {
    classNames += " text-white border-b-2 border-gray-600";
  } else {
    classNames += " text-blue-700";
  }

  return (
    <li key={name} className={classNames}>
      <Link to={`/calendar/${name.toLowerCase()}`} className="capitalize">
        {capitalize(name)}
      </Link>
    </li>
  );
};

export default Category;
