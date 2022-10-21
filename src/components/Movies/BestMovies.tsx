import React, { useState } from "react";

import { BestMovieCategory, useBestMoviesQuery } from "generated/graphql";

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

const activeButtonClasses = (
  category: BestMovieCategory,
  buttonName: BestMovieCategory,
  extraClasses: string
): string => {
  let classes = extraClasses;

  if ((category as string) === buttonName.toUpperCase()) {
    classes += " border-teal-500 ring-teal-500 ring-2";
  }
  return classes;
};

const BestMovies = (props: BestMoviesProps): JSX.Element => {
  const {
    match: {
      params: { year: chosenYear }
    }
  } = props;

  const [category, setCategory] = useState(BestMovieCategory.Released);

  const year = parseInt(chosenYear, 10);

  const currentYear = new Date().getFullYear();
  const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear]
    .reverse()
    .map((y) => y.toString());

  const { error, data, fetchMore } = useBestMoviesQuery({
    variables: {
      category,
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
      <div className="mt-8 flex items-center justify-center">
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => setCategory(BestMovieCategory.Released)}
            className={activeButtonClasses(
              category,
              BestMovieCategory.Released,
              "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none"
            )}
          >
            Released
          </button>

          <button
            type="button"
            onClick={() => setCategory(BestMovieCategory.Watched)}
            className={activeButtonClasses(
              category,
              BestMovieCategory.Watched,
              "relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none"
            )}
          >
            Watched
          </button>
        </span>
      </div>
      <div className="mt-20">{mainContent}</div>
    </div>
  );
};

export default BestMovies;
