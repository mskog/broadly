import React from "react";

import { useEpisodesQuery } from "generated/graphql";
import Loading from "components/shared/LoadingFull";
import List from "./List";
import Categories from "./Categories";

export default function Episodes(props: any) {
  const {
    match: {
      params: { category = "WATCHED" }
    }
  } = props;

  const { error, data, fetchMore } = useEpisodesQuery({
    variables: {
      first: 30,
      skip: 0,
      category: category.toUpperCase()
    }
  });

  const loadMore = () => {
    if (!data) return;
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
  if (!data) {
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} episodes={data.episodes} />;
  }

  return (
    <div className="container px-8 mx-auto md:pt-10">
      <Categories category={category} />
      {mainContent}
    </div>
  );
}
