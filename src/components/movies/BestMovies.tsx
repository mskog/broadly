import React from "react";

import { useBestMoviesQuery } from "store/movies";

import Loading from "components/shared/LoadingFull";

import List from "./List";
import Categories from "./Categories";

import { BestMoviesData } from "types";

export default function BestMovies(props: any) {
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
  ].map(item => item.toString());

  const { loading, data, fetchMore } = useBestMoviesQuery({
    year
  });

  if (loading || data === undefined) {
    return (
      <div className="container px-4 mx-auto overflow-auto md:pt-10">
        <Categories
          categories={years}
          category={year.toString()}
          baseRoute="best_movies"
        />
        <div className="mt-20">
          <Loading />
        </div>
      </div>
    );
  }

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.bestMovies.length },
      updateQuery: (prev: BestMoviesData, { fetchMoreResult }) => {
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

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories
        categories={years}
        category={year.toString()}
        baseRoute="best_movies"
      />
      <div className="mt-20">
        <List loadMore={loadMore} movies={data.bestMovies} />
      </div>
    </div>
  );
}
