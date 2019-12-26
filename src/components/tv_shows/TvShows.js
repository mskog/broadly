import React from "react";

import queryString from "query-string";

import { useTvShowsQuery } from "../../store/tv_shows";

import Categories from "./Categories";
import List from "./List";
import Search from "../shared/Search";

export default function TvShows(props) {
  const {
    history,
    pathname,
    location: { search },
    match: {
      params: { category }
    }
  } = props;

  const { query } = queryString.parse(search);

  const { loading, error, data, fetchMore } = useTvShowsQuery({
    first: 20,
    skip: 0,
    category,
    query
  });

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.tvShows.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          tvShows: [...prev.tvShows, ...fetchMoreResult.tvShows]
        };
      }
    });
  };

  let mainContent;
  if (loading && !data) {
    mainContent = <p>Loading...</p>;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} tvShows={data.tvShows} />;
  }

  return (
    <div className="container px-8 pt-10 mx-auto overflow-auto">
      <Categories category={category} />
      <div className="flex justify-center">
        <Search
          pathname={pathname}
          history={history}
          query={query}
          placeholder="Movie name or description..."
        />
      </div>
      {mainContent}
    </div>
  );
}
