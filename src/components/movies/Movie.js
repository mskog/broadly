import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faEye,
  faPhotoVideo
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { truncate } from "lodash";
import { DateTime } from "luxon";

import { formattedRuntime, releaseYear, resolutionDisplay } from "utilities";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

export default function Movie({ movie }) {
  const {
    id,
    title,
    releaseDate,
    runtime,
    watchedAt,
    rtCriticsRating,
    personalRating,
    posterImageThumbnail,
    bestRelease
  } = movie;

  const rating = personalRating * 10 || rtCriticsRating;
  const personalRatingText = personalRating
    ? `${personalRating}/10`
    : undefined;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex p-4">
        <div className="w-32 h-40 -mt-10">
          <Link to={`/movies/${id}`}>
            <Poster src={posterImageThumbnail} />
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/movies/${id}`}>
            <h2 className="text-3xl leading-none ">
              {truncate(title, { length: 40 })}
            </h2>
          </Link>
          <Ratings score={rating}>{personalRatingText}</Ratings>
          <div className="mt-2 text-sm font-thin">
            <span className="mr-2">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {releaseYear(releaseDate)}
            </span>
            {bestRelease && (
              <span className="mr-2">
                <FontAwesomeIcon className="mr-1" icon={faPhotoVideo} />
                {resolutionDisplay(bestRelease.resolution)}
              </span>
            )}
            {!watchedAt && (
              <span className="mr-2">
                <FontAwesomeIcon className="mr-1" icon={faClock} />
                {formattedRuntime(runtime)}
              </span>
            )}
            {watchedAt && (
              <span>
                <FontAwesomeIcon className="mr-1" icon={faEye} />
                {DateTime.fromISO(watchedAt).toISODate()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
