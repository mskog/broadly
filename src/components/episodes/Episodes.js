import React from "react";

import { useEpisodesQuery } from "store/tv_shows";
import List from "./List";

export default function Episodes() {
  const { loading, error, data, fetchMore } = useEpisodesQuery({
    first: 20,
    skip: 0
  });

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.episodes.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return {
          ...prev,
          episodes: [...prev.episodes, ...fetchMoreResult.episodes]
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
    mainContent = <List loadMore={loadMore} episodes={data.episodes} />;
  }

  return (
    <div className="container px-8 pt-20 mx-auto overflow-auto">
      {mainContent}
    </div>
  );
}
