import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { truncate } from "lodash";
import { DateTime } from "luxon";

import { formattedRuntime, releaseYear } from "utilities";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

import { Movie as MovieType } from "types";

type MovieProps = {
  movie: MovieType;
};

export default function Movie({ movie }: MovieProps) {
  const {
    id,
    title,
    releaseDate,
    runtime,
    watchedAt,
    rtCriticsRating,
    personalRating,
    posterImageThumbnail
  } = movie;

  const rating = personalRating * 10 || rtCriticsRating;
  const personalRatingText = personalRating
    ? `${personalRating}/10`
    : undefined;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <Link to={`/movies/${id}`}>
            <Poster src={posterImageThumbnail} />
          </Link>
        </div>
        <div className="w-full">
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
