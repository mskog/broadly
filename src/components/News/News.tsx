import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { useNewsQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";

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

export default function News(props: NewsProps) {
  const {
    match: {
      params: { category: chosenCategory }
    }
  } = props;

  const { error, data } = useNewsQuery({
    variables: { category: chosenCategory }
  });

  let mainContent;
  if (!data) {
    mainContent = <Loading />;
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
}
