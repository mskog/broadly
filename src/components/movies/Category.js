/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";

import { Link } from "react-router-dom";

import capitalize from "lodash/capitalize";

export default function Category({ name, active }) {
  let classNames =
    "flex-1 text-lg font-bold text-center cursor-pointer hover:text-white pb-2";

  if (active) {
    classNames += " text-white border-b-2 border-gray-600";
  } else {
    classNames += " text-blue-700";
  }

  return (
    <li key={name} className={classNames}>
      <Link to={`/movies/${name}`}>{capitalize(name)}</Link>
    </li>
  );
}
