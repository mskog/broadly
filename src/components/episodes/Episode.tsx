/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Link } from "react-router-dom";

import { padStart } from "lodash";

import { Episode as EpisodeType } from "types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { cdnImage } from "utilities";

function seasonEpisode(season?: number, episodeNumber?: number) {
  if (!season || !episodeNumber) return "?";
  return `S${padStart(season.toString(), 2, "0")}E${padStart(
    episodeNumber.toString(),
    2,
    "0"
  )}`;
}

function episodeHeader(episode?: string, name?: string) {
  return (
    <h3>
      <span className="text-xl font-semibold text-gray-300">{episode}</span>
      <span className="text-lg font-medium text-gray-400"> - {name}</span>
    </h3>
  );
}

export default function Episode({ episode }: { episode: EpisodeType }) {
  const {
    id,
    stillImageThumbnail = "",
    season,
    episode: episodeNumber,
    tmdbDetails,
    tvShow: { name: tvShowName },
    watched
  } = episode;

  return (
    <div className="w-full p-2 md:w-1/2 lg:w-1/3">
      <Link to={`/episodes/${id}`}>
        <div
          className="relative h-40 bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,26,48,0.6), rgba(21,26,48,0.9)), url('${cdnImage(
              stillImageThumbnail
            )}')`
          }}
        >
          {watched && (
            <div className="absolute top-0 right-0">
              <div className="p-2 text-gray-500">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          )}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-300">
              {tvShowName}
            </h2>
            {episodeHeader(
              seasonEpisode(season, episodeNumber),
              tmdbDetails.name
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
