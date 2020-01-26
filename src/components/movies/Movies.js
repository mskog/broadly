import React from "react";

import queryString from "query-string";

import { useMoviesQuery } from "store/movies";

import Loading from "components/shared/LoadingFull";
import SearchBox from "components/shared/SearchBox";

import Categories from "./Categories";
import List from "./List";

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
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.movies} />;
  }

  return (
    <div className="container px-8 mx-auto overflow-auto md:pt-10">
      <Categories category={category} />
      <div className="flex justify-center">
        <SearchBox
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
