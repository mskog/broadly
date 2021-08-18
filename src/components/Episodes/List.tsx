import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Episode from "./Episode";

type ListProps = {
  loadMore: () => void;
  episodes: Array<any>;
};

export default function List({ loadMore, episodes }: ListProps) {
  const episodeComponents = episodes.map((episode) => {
    return <Episode key={episode.id} episode={episode} />;
  });

  return (
    <div className="flex flex-wrap -mx-2">
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={episodes.length}
        next={loadMore}
        hasMore
        loader={<h4>Loading...</h4>}
        className="flex-wrap mt-10 -mx-3 md:flex"
      >
        {episodeComponents}
      </InfiniteScroll>
    </div>
  );
}
