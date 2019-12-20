import React from "react";

import queryString from "query-string";

import { useMoviesQuery } from "../../store/movies";

import Categories from "./Categories";
import List from "./List";
import Search from "../shared/Search";

export default function Movies(props) {
  const {
    history,
    pathname,
    match: {
      params: { category }
    },
    location: { search }
  } = props;

  const { query } = queryString.parse(search);

  const { loading, error, data, fetchMore } = useMoviesQuery({
    first: 20,
    skip: 0,
    category,
    query
  });

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

  let mainContent;
  if (loading && !data) {
    mainContent = <p>Loading...</p>;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.movies} />;
  }

  return (
    <div className="container px-8 mx-auto overflow-auto">
      <Categories category={category} />
      <div className="flex justify-center">
        <Search
          pathname={pathname}
          history={history}
          query={query}
          placeholder="Movie name or description..."
        />
      </div>
      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
