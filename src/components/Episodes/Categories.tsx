import React from "react";

import Category from "./Category";

const CATEGORIES = ["downloads", "watched"];

type CategoriesProps = {
  category: string;
};

export default function Categories({ category }: CategoriesProps) {
  const options = CATEGORIES.map((cat) => (
    <Category key={cat} name={cat} active={category === cat} />
  ));

  return <ul className="flex pt-20">{options}</ul>;
}
