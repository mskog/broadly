/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { Link } from "react-router-dom";

import padStart from "lodash/padStart";
import truncate from "lodash/truncate";

import { EyeIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

import { TvShowQuery } from "generated/graphql";

import { cdnImage } from "utilities";

function seasonEpisode(season: string, episodeNumber: string) {
  return `S${padStart(season, 2, "0")}E${padStart(episodeNumber, 2, "0")}`;
}

function episodeHeader(episode: string, name: string = "TBA") {
  return (
    <h3>
      <span className="text-xl font-semibold text-gray-300">{episode}</span>
      <span className="text-lg font-medium text-gray-400"> - {name}</span>
    </h3>
  );
}

type EpisodeProps = {
  episode: Pick<
    TvShowQuery["tvShow"]["seasons"][0]["episodes"][0],
    | "id"
    | "name"
    | "stillImage"
    | "stillImageBase64"
    | "seasonNumber"
    | "episode"
    | "downloaded"
    | "watched"
    | "tmdbDetails"
  >;
};

const statusIcon = (downloaded: boolean, watched: boolean): JSX.Element => {
  if (watched) {
    return (
      <div className="absolute top-0 right-0">
        <div className="p-2 text-gray-500">
          <EyeIcon className="w-6 h-6" />
        </div>
      </div>
    );
  } else if (downloaded) {
    return (
      <div className="absolute top-0 right-0">
        <div className="p-2 text-gray-500">
          <ArrowDownIcon className="w-6 h-6" />
        </div>
      </div>
    );
  }
  return <></>;
};

const Episode = ({ episode }: EpisodeProps): JSX.Element => {
  const {
    id,
    stillImage,
    stillImageBase64,
    seasonNumber,
    episode: episodeNumber,
    downloaded,
    watched,
    tmdbDetails = {}
  } = episode;

  const { name: episodeName } = tmdbDetails || {};

  let overview;
  if (watched) {
    overview = tmdbDetails.overview;
  } else {
    overview = "[ Overview hidden to prevent spoilers ]";
  }

  return (
    <div className="w-full p-2 md:w-1/2 lg:w-1/3">
      <Link to={`/episodes/${id}`}>
        <div
          className="relative h-40 bg-cover "
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(21,26,48,0.6), rgba(21,26,48,0.9)), url('${cdnImage(
              stillImage || ""
            )}'), url('${stillImageBase64}') `
          }}
        >
          {statusIcon(downloaded, watched)}
          <div className="p-4">
            {seasonNumber &&
              episodeNumber &&
              episodeHeader(
                seasonEpisode(
                  seasonNumber.toString(),
                  episodeNumber.toString()
                ),
                episodeName
              )}
            <p className="text-gray-400">
              {truncate(overview, { length: 100 })}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Episode;
