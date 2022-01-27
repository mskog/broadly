/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Link } from "react-router-dom";

import padStart from "lodash/padStart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { EpisodesQuery, EpisodeRelease } from "generated/graphql";

import { cdnImage, resolutionDisplay } from "utilities";

function seasonEpisode(season: string, episodeNumber: string) {
  return `S${padStart(season, 2, "0")}E${padStart(episodeNumber, 2, "0")}`;
}

function episodeHeader(episode: string, name: string) {
  return (
    <h3>
      <span className="text-xl font-semibold text-gray-300">{episode}</span>
      <span className="text-lg font-medium text-gray-400"> - {name}</span>
    </h3>
  );
}

type EpisodeProps = {
  episode: Pick<
    EpisodesQuery["episodes"][0],
    | "id"
    | "season"
    | "episode"
    | "stillImageThumbnail"
    | "stillImageBase64"
    | "tmdbDetails"
    | "tvShow"
    | "watched"
  > & { bestRelease?: Pick<EpisodeRelease, "resolution"> };
};

const Episode = ({ episode }: EpisodeProps): JSX.Element => {
  const {
    id,
    stillImageThumbnail,
    stillImageBase64,
    season,
    episode: episodeNumber,
    tmdbDetails = {},
    tvShow: { name },
    watched,
    bestRelease
  } = episode;

  const { name: episodeName } = tmdbDetails || {};

  return (
    <div className="w-full p-2 md:w-1/2 lg:w-1/3">
      <Link to={`/episodes/${id}`}>
        <div
          className="relative h-40 bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,26,48,0.6), rgba(21,26,48,0.9)), url('${cdnImage(
              stillImageThumbnail || ""
            )}'), url('${stillImageBase64}')`
          }}
        >
          {bestRelease && (
            <div className="absolute bottom-0 right-0">
              <div className="p-2 text-gray-400">
                {resolutionDisplay(bestRelease.resolution)}
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
            {season &&
              episodeNumber &&
              episodeName &&
              episodeHeader(
                seasonEpisode(season.toString(), episodeNumber.toString()),
                episodeName
              )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Episode;
