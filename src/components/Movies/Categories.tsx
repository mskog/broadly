import React from "react";

import Category from "./Category";

type CategoriesProps = {
  categories: Array<any>;
  category: any;
  baseRoute?: string;
};

export default function Categories({
  categories,
  category,
  baseRoute = "movies"
}: CategoriesProps) {
  const options = categories.map((cat: any) => (
    <Category
      baseRoute={baseRoute}
      key={cat}
      name={cat}
      active={category === cat}
    />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
