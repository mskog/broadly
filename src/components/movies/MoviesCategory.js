/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";

import capitalize from "lodash/capitalize";

export default function MoviesCategory({ name, active, setSelectedCategory }) {
  let classNames = "flex-1 text-center cursor-pointer hover:text-white";

  if (active) {
    classNames += " text-white";
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
