import React from "react";

import { useBestMoviesQuery } from "generated/graphql";

import { LoadingFull } from "components/shared";

import List from "./List";
import Categories from "./Categories";

type BestMoviesProps = {
  match: {
    params: {
      year: string;
    };
  };
};

const BestMovies = (props: BestMoviesProps): JSX.Element => {
  const {
    match: {
      params: { year: chosenYear }
    }
  } = props;

  const year = parseInt(chosenYear, 10);

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear]
    .reverse()
    .map((y) => y.toString());

  const { error, data, fetchMore } = useBestMoviesQuery({
    variables: {
      year,
      first: 20
    }
  });

  const loadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { skip: data.bestMovies.length },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      updateQuery: (prev: any, { fetchMoreResult }) => {
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
  if (!data) {
    mainContent = <LoadingFull />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.bestMovies} />;
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories
        categories={years}
        category={year.toString()}
        baseRoute="best_movies"
      />
      <div className="mt-20">{mainContent}</div>
    </div>
  );
};

export default BestMovies;
