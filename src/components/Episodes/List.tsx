import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Episode as EpisodeType, EpisodeRelease } from "generated/graphql";

import Episode from "./Episode";

type ListProps = {
  episodes: Array<
    Pick<
      EpisodeType,
      | "id"
      | "season"
      | "episode"
      | "stillImageThumbnail"
      | "tmdbDetails"
      | "watchedAt"
      | "tvShow"
      | "watched"
    > & { bestRelease?: Pick<EpisodeRelease, "resolution"> }
  >;
  loadMore: () => void;
};

const List = ({ loadMore, episodes }: ListProps): JSX.Element => {
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
};

export default List;
