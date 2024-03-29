import React from "react";

import Category from "./Category";

const CATEGORIES = ["downloads", "watched"];

type CategoriesProps = {
  category: string;
};

const Categories = ({ category }: CategoriesProps): JSX.Element => {
  const options = CATEGORIES.map((cat) => (
    <Category key={cat} name={cat} active={category === cat} />
  ));

  return <ul className="flex pt-20">{options}</ul>;
};

export default Categories;
