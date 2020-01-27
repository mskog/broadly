import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "react-lazyload";

import Episode from "./Episode";

export default function List({ loadMore, episodes }) {
  const episodeComponents = episodes.map(episode => {
    return (
      <LazyLoad key={episode.id}>
        <Episode episode={episode} />
      </LazyLoad>
    );
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
