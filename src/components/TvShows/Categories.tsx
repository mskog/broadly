import React from "react";

import Category from "./Category";

const CATEGORIES = [
  { name: "watching", value: "watching" },
  { name: "waitlist", value: "waitlist" },
  { name: "other", value: "not_watching" },
  { name: "ended", value: "ended" }
];

const Categories = ({ category }: { category: string }): JSX.Element => {
  const options = CATEGORIES.map(({ name, value }) => (
    <Category
      key={name}
      name={name}
      value={value}
      active={category === value}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
};

export default Categories;
