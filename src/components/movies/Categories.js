import React from "react";

import Category from "./Category";

const CATEGORIES = ["watched", "downloads", "waitlist"];

export default function Categories({ category, setSelectedCategory }) {
  const options = CATEGORIES.map(cat => (
    <Category
      key={cat}
      name={cat}
      active={category === cat}
      setSelectedCategory={setSelectedCategory}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
