import React from "react";

import sortBy from "lodash/sortBy";
import uniqBy from "lodash/uniqBy";
import reverse from "lodash/reverse";

import { Episode as EpisodeType } from "generated/graphql";
import Episode from "./Episode";

type EpisodesProps = {
  episodes: Pick<
    EpisodeType,
    | "id"
    | "name"
    | "stillImage"
    | "season"
    | "episode"
    | "watched"
    | "tmdbDetails"
  >[];
};

const Episodes = ({ episodes }: EpisodesProps): JSX.Element => {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);

  const episodeComponents = reverse(
    sortBy(uniqEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex-wrap -mx-2 md:flex">{episodeComponents}</div>;
};

export default Episodes;
