import React from "react";

import Category from "./Category";

const CATEGORIES = [
  { name: "Movies", value: "movies" },
  { name: "TV Shows", value: "tv_shows" }
];

export default function Categories({ category }) {
  const options = CATEGORIES.map(({ name, value }) => (
    <Category
      key={name}
      name={name}
      value={value}
      active={category === value}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
