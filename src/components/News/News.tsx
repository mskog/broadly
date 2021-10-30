import React from "react";

import { useNewsQuery } from "generated/graphql";

import { LoadingFull } from "components/shared";

import List from "./List";
import Categories from "./Categories";

const CATEGORIES = [
  { name: "Our Shows", value: "our_tv_shows" },
  { name: "TV Shows", value: "tv_shows" },
  { name: "Movies", value: "movies" }
];

type NewsProps = {
  match: {
    params: { category: string };
  };
};

const News = (props: NewsProps): JSX.Element => {
  const {
    match: {
      params: { category: chosenCategory }
    }
  } = props;

  const { error, data } = useNewsQuery({
    variables: { category: chosenCategory },
    fetchPolicy: "cache-and-network"
  });

  let mainContent;
  if (!data) {
    mainContent = <LoadingFull />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = (
      <div>
        <Categories categories={CATEGORIES} category={chosenCategory} />
        <List newsItems={data.news} />
      </div>
    );
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:max-w-4xl">
      <div className="mt-10">{mainContent}</div>
    </div>
  );
};

export default News;
