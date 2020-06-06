import React from "react";
import { Link } from "react-router-dom";
import { padStart } from "lodash";

import Utilities from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

function seasonEpisode(season, episodeNumber) {
  return `S${padStart(season, 2, "0")}E${padStart(episodeNumber, 2, "0")}`;
}

export default function Top({ episode }) {
  const {
    season,
    episode: episodeNumber,
    stillImage,
    tmdbDetails: { name },
    tvShow: { id: tvShowId, name: tvShowName }
  } = episode;

  return (
    <div>
      <div
        className="w-full -mb-40 h-75vh"
        style={backgroundStyle(Utilities.cdnImage(stillImage))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <Link to={`/tv_shows/${tvShowId}`}>
            <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
              {tvShowName}
            </h1>
          </Link>
          <h2 className="text-xl text-center text-gray-300 md:text-left">
            {name}
          </h2>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem
                title="Episode"
                value={seasonEpisode(season, episodeNumber)}
              />
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
}
