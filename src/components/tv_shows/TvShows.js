import React from "react";

import { useTvShowsQuery } from "../../store/tv_shows";

import Categories from "./Categories";
import List from "./List";

export default function TvShows(props) {
  const {
    match: {
      params: { category, query }
    }
  } = props;

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
    <div className="container px-8 mx-auto overflow-auto">
      <Categories category={category} />
      {mainContent}
    </div>
  );
}
