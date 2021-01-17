/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Link } from "react-router-dom";

import { padStart } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { cdnImage, resolutionDisplay } from "utilities";

function seasonEpisode(season, episodeNumber) {
  return `S${padStart(season, 2, "0")}E${padStart(episodeNumber, 2, "0")}`;
}

function episodeHeader(episode, name) {
  return (
    <h3>
      <span className="text-xl font-semibold text-gray-300">{episode}</span>
      <span className="text-lg font-medium text-gray-400"> - {name}</span>
    </h3>
  );
}

export default function Episode({ episode }) {
  const {
    id,
    stillImageThumbnail,
    season,
    episode: episodeNumber,
    tmdbDetails = {},
    bestRelease: { resolution },
    tvShow: { name },
    watched
  } = episode;

  const { name: episodeName } = tmdbDetails;

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
          {resolution && (
            <div className="absolute bottom-0 right-0">
              <div className="p-2 text-gray-400">
                {resolutionDisplay(resolution)}
              </div>
            </div>
          )}
          {watched && (
            <div className="absolute top-0 right-0">
              <div className="p-2 text-gray-400">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          )}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-300">{name}</h2>
            {episodeHeader(seasonEpisode(season, episodeNumber), episodeName)}
          </div>
        </div>
      </Link>
    </div>
  );
}
