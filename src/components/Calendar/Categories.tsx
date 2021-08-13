import React from "react";

import Category from "./Category";

const CATEGORIES = ["ALL", "EPISODES", "MOVIES"];

export default function Categories({ category }: { category: string }) {
  const options = CATEGORIES.map((cat) => (
    <Category
      key={cat}
      name={cat}
      active={category.toLowerCase() === cat.toLowerCase()}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
