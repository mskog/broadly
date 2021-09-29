import React from "react";

import { useTvShowsQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";
import Categories from "./Categories";
import List from "./List";

type TvShowsProps = {
  location: {
    search: any;
  };
  match: {
    params: {
      category: string;
    };
  };
};

export default function TvShows(props: TvShowsProps) {
  const {
    match: {
      params: { category }
    }
  } = props;

  const { error, data, fetchMore } = useTvShowsQuery({
    variables: {
      first: 20,
      skip: 0,
      category
    }
  });

  const loadMore = () => {
    if (!data) return;
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
  if (error) {
    mainContent = <p>Error</p>;
  } else if (!data) {
    mainContent = <Loading />;
  } else {
    mainContent = <List loadMore={loadMore} tvShows={data.tvShows} />;
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories category={category} />

      {mainContent}
    </div>
  );
}
