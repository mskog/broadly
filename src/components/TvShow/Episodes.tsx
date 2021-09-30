import React from "react";
import { sortBy, uniqBy, reverse } from "lodash";

import { Episode as EpisodeType } from "generated/graphql";
import Episode from "./Episode";

type EpisodeProps = {
  episodes: Pick<
    EpisodeType,
    | "id"
    | "name"
    | "stillImageThumbnail"
    | "season"
    | "episode"
    | "watched"
    | "tmdbDetails"
  >[];
};

export default function Episodes({ episodes }: EpisodeProps) {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);

  const episodeComponents = reverse(
    sortBy(uniqEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex-wrap -mx-2 md:flex">{episodeComponents}</div>;
}
