import React from "react";

import { useBestMoviesQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";

import List from "./List";
import Categories from "./Categories";

type BestMoviesProps = {
  match: {
    params: {
      year: string;
    };
  };
};

export default function BestMovies(props: BestMoviesProps) {
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
  ].map((y) => y.toString());

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
    mainContent = <Loading />;
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
}
