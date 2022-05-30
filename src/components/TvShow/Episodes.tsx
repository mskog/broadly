import React from "react";

import sortBy from "lodash/sortBy";
import uniqBy from "lodash/uniqBy";
import reverse from "lodash/reverse";

import { TvShowQuery } from "generated/graphql";
import Episode from "./Episode";

type EpisodesProps = {
  episodes: Pick<
    TvShowQuery["tvShow"]["seasons"][0]["episodes"][0],
    | "id"
    | "name"
    | "stillImage"
    | "stillImageBase64"
    | "seasonNumber"
    | "episode"
    | "downloaded"
    | "watched"
    | "aired"
    | "tmdbDetails"
  >[];
};

const Episodes = ({ episodes }: EpisodesProps): JSX.Element => {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);
  const airedEpisodes = uniqEpisodes.filter((episode) => {
    return episode.aired || episode.watched || episode.downloaded;
  });

  const episodeComponents = reverse(
    sortBy(airedEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex-wrap -mx-2 md:flex">{episodeComponents}</div>;
};

export default Episodes;
