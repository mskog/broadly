import React from "react";

import { useMoviesQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";

import Categories from "./Categories";
import List from "./List";

const CATEGORIES = ["watched", "downloads", "waitlist"];

export default function Movies(props: any) {
  const {
    match: {
      params: { category }
    }
  } = props;

  const { loading, error, data, fetchMore } = useMoviesQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      first: 20,
      skip: 0,
      category
    }
  });

  const loadMore = () => {
    if (!data) {
      return;
    }
    fetchMore({
      variables: { skip: data.movies.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return { ...prev, movies: [...prev.movies, ...fetchMoreResult.movies] };
      }
    });
  };

  let mainContent;
  if (loading && !data) {
    mainContent = <Loading />;
  } else if (error || !data) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.movies} />;
  }

  return (
    <div className="container px-4 pt-10 mx-auto overflow-auto">
      <Categories categories={CATEGORIES} category={category} />

      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
