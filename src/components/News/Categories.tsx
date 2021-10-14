import React from "react";

import Category from "./Category";

type CategoriesProps = {
  categories: Array<{ name: string; value: string }>;
  category: string;
};

const Categories = ({ categories, category }: CategoriesProps): JSX.Element => {
  const options = categories.map(({ name, value }) => (
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
