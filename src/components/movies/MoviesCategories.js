import React from "react";

import MoviesCategory from "./MoviesCategory";

const CATEGORIES = ["watched", "downloads", "waitlist"];

export default function MoviesCategories({ category, setSelectedCategory }) {
  const options = CATEGORIES.map(cat => (
    <MoviesCategory
      key={cat}
      name={cat}
      active={category === cat}
      setSelectedCategory={setSelectedCategory}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
