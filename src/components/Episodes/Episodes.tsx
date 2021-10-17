import React from "react";

import capitalize from "lodash/capitalize";

import { EpisodeCategory, useEpisodesQuery } from "generated/graphql";
import Loading from "components/shared/LoadingFull";
import List from "./List";
import Categories from "./Categories";

type EpisodesProps = {
  match: {
    params: { category: EpisodeCategory };
  };
};

const Episodes = (props: EpisodesProps): JSX.Element => {
  const {
    match: {
      params: { category = EpisodeCategory.Downloads }
    }
  } = props;

  const episodeCategory =
    EpisodeCategory[capitalize(category) as keyof typeof EpisodeCategory];

  const { error, data, fetchMore } = useEpisodesQuery({
    fetchPolicy: "cache-and-network",
    variables: {
      first: 30,
      skip: 0,
      category: episodeCategory
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
};

export default Episodes;
