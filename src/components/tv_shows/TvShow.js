import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import { truncate } from "lodash";

import { formattedRuntime, releaseYear } from "utilities";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

export default function TvShow({ tvShow }) {
  const {
    id,
    name,
    posterImageThumbnail,
    tmdbDetails: { voteAverage, firstAirDate },
    traktDetails: { runtime }
  } = tvShow;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <LazyLoad>
            <Link to={`/tv_shows/${id}`}>
              <div className="h-40 -mt-10 rounded">
                <Poster src={posterImageThumbnail} />
              </div>
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full ">
          <Link to={`/tv_shows/${id}`}>
            <h2 className="text-3xl leading-none ">
              {truncate(name, { length: 40 })}
            </h2>
          </Link>
          <Ratings score={voteAverage * 10} />
          <div className="mt-2 text-sm font-thin">
            <span className="mr-2">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {releaseYear(firstAirDate)}
            </span>
            <span>
              <FontAwesomeIcon className="mr-1" icon={faClock} />
              {formattedRuntime(runtime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
