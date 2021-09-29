import React from "react";

import Category from "./Category";

type CategoriesProps = {
  categories: Array<string>;
  category: string | undefined;
  baseRoute?: string;
};

export default function Categories({
  categories,
  category,
  baseRoute = "movies"
}: CategoriesProps) {
  const options = categories.map((cat) => (
    <Category
      baseRoute={baseRoute}
      key={cat}
      name={cat.toString()}
      active={category === cat}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
