import React from "react";

import Category from "./Category";

export default function Categories({
  categories,
  category,
  baseRoute = "movies"
}) {
  const options = categories.map(cat => (
    <Category
      baseRoute={baseRoute}
      key={cat}
      name={cat}
      active={category === cat}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
