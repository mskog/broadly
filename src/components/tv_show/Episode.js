/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Link } from "react-router-dom";

import { padStart, truncate } from "lodash";
import LazyLoad from "react-lazyload";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { cdnImage } from "utilities";

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
    name,
    stillImageThumbnail,
    season,
    episode: episodeNumber,
    watched,
    tmdbDetails = {}
  } = episode;

  const { name: episodeName = name } = tmdbDetails;

  let overview;
  if (watched) {
    overview = tmdbDetails.overview;
  } else {
    overview = "[ Overview hidden to prevent spoilers ]";
  }

  return (
    <LazyLoad>
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
            <div className="p-4">
              {episodeHeader(seasonEpisode(season, episodeNumber), episodeName)}
              <p className="text-gray-500">
                {truncate(overview, { length: 100 })}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </LazyLoad>
  );
}
