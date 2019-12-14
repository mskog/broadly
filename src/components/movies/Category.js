/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";

import capitalize from "lodash/capitalize";

export default function Category({ name, active, setSelectedCategory }) {
  let classNames =
    "flex-1 text-lg font-bold text-center cursor-pointer hover:text-white pb-2";

  if (active) {
    classNames += " text-white border-b-2 border-gray-600";
  } else {
    classNames += " text-blue-700";
  }

  const onClick = () => {
    setSelectedCategory(name);
  };

  return (
    <li onClick={onClick} key={name} className={classNames}>
      {capitalize(name)}
    </li>
  );
}
