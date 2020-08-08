import React from "react";

import Category from "./Category";

export default function Categories({ categories, category }) {
  const options = categories.map(({ name, value }) => (
    <Category
      key={name}
      name={name}
      value={value}
      active={category === value}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
