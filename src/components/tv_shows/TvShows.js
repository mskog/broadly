import React from "react";

import queryString from "query-string";

import { useTvShowsQuery } from "store/tv_shows";

import Loading from "components/shared/LoadingFull";
import AutoSearchBox from "components/shared/AutoSearchBox";
import Categories from "./Categories";
import List from "./List";

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
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} tvShows={data.tvShows} />;
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories category={category} />
      <div className="flex flex-col items-center">
        <AutoSearchBox
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
