import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { TvShow as TvShowType } from "generated/graphql";
import TvShow from "./TvShow";

type ListProps = {
  loadMore: () => void;
  tvShows: TvShowType[];
};

const List = ({ loadMore, tvShows }: ListProps): JSX.Element => {
  const tvShowsList = tvShows.map((tvShow) => (
    <div key={tvShow.id} className="px-3 mb-10 md:w-full lg:w-1/2">
      <TvShow tvShow={tvShow} />
    </div>
  ));

  if (tvShows.length === 0)
    return <div className="text-gray-200">No results </div>;

  return (
    <div>
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={tvShowsList.length}
        next={loadMore}
        hasMore
        loader={<h4>Loading...</h4>}
        className="flex-wrap mt-20 -mx-3 md:flex"
      >
        {tvShowsList}
      </InfiniteScroll>
    </div>
  );
};

export default List;
