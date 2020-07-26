import React from "react";

import { useBestMoviesQuery } from "store/movies";

import Loading from "components/shared/LoadingFull";

import List from "./List";
import Categories from "./Categories";

export default function BestMovies(props) {
  const {
    match: {
      params: { year: chosenYear }
    }
  } = props;

  const year = parseInt(chosenYear, 10);

  const currentYear = new Date().getFullYear();
  const years = [
    currentYear - 3,
    currentYear - 2,
    currentYear - 1,
    currentYear
  ];

  const { loading, error, data, fetchMore } = useBestMoviesQuery({
    first: 20,
    skip: 0,
    year
  });

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.bestMovies.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          bestMovies: [...prev.bestMovies, ...fetchMoreResult.bestMovies]
        };
      }
    });
  };

  let mainContent;
  if (loading && !data) {
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.bestMovies} />;
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories categories={years} category={year} baseRoute="best_movies" />
      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
