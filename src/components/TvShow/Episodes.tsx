import React from "react";

import sortBy from "lodash/sortBy";
import uniqBy from "lodash/uniqBy";
import reverse from "lodash/reverse";

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

const Episodes = ({ episodes }: EpisodeProps): JSX.Element => {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);

  const episodeComponents = reverse(
    sortBy(uniqEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex-wrap -mx-2 md:flex">{episodeComponents}</div>;
};

export default Episodes;
