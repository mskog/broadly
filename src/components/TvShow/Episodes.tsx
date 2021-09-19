import React from "react";
import { sortBy, uniqBy, reverse } from "lodash";

import Episode from "./Episode";

export default function Episodes({ episodes }: { episodes: any[] }) {
  const uniqEpisodes = uniqBy(episodes, (episode) => episode.episode);

  const episodeComponents = reverse(
    sortBy(uniqEpisodes, (episode) => episode.episode)
  ).map((episode) => {
    return <Episode key={episode.episode} episode={episode} />;
  });

  return <div className="flex-wrap -mx-2 md:flex">{episodeComponents}</div>;
}
