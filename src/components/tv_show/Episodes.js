import React from "react";
import { sortBy, uniqBy, reverse } from "lodash";

import Episode from "./Episode";

export default function Episodes({ episodes }) {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);

  const episodeComponents = reverse(
    sortBy(uniqEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex flex-wrap -mx-2">{episodeComponents}</div>;
}
