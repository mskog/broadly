import React from "react";

import queryString from "query-string";

import { useMoviesQuery } from "store/movies";

import Loading from "components/shared/LoadingFull";

import Categories from "./Categories";
import List from "./List";

const CATEGORIES = ["watched", "downloads", "waitlist"];

type MoviesProps = {
  match: {
    params: {
      category: string;
    };
  };
  location: {
    search: string;
  };
};

export default function Movies(props: MoviesProps) {
  const {
    match: {
      params: { category }
    },
    location: { search }
  } = props;

  const { query } = queryString.parse(search);

  const { data, fetchMore } = useMoviesQuery({
    first: 20,
    skip: 0,
    category,
    query
  });

  if (data === undefined) {
    return (
      <div className="container px-4 mx-auto overflow-auto md:pt-10">
        <Categories categories={CATEGORIES} category={category} />

        <div className="mt-20">
          <Loading />
        </div>
      </div>
    );
  }

  const loadMore = () => {
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

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories categories={CATEGORIES} category={category} />

      <div className="mt-20">
        <List loadMore={loadMore} movies={data.movies} />
      </div>
    </div>
  );
}
