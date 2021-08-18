import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Loading from "components/shared/LoadingFull";

import List from "./List";
import Categories from "./Categories";

const CATEGORIES = [
  { name: "Our Shows", value: "our_tv_shows" },
  { name: "TV Shows", value: "tv_shows" },
  { name: "Movies", value: "movies" }
];

const query = gql`
  query News($category: String!) {
    news(category: $category) {
      title
      url
      metadata {
        image
        description
      }
      newsworthy {
        ... on TvShow {
          id
          name
        }
      }
    }
  }
`;

export default function News(props: any) {
  const {
    match: {
      params: { category: chosenCategory }
    }
  } = props;

  const { loading, error, data } = useQuery(query, {
    fetchPolicy: "cache-and-network",
    variables: { category: chosenCategory }
  });

  let mainContent;
  if (loading && !data) {
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
