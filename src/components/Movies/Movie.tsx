import React from "react";

import { CalendarIcon, TvIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import truncate from "lodash/truncate";

import dayjs from "dayjs";

import { formattedRuntime, releaseYear, resolutionDisplay } from "utilities";

import { MoviesQuery, MovieRelease } from "generated/graphql";

import { Ratings } from "components/shared";
import { Poster } from "components/shared";

type MovieProps = {
  movie: Pick<
    MoviesQuery["movies"][0],
    | "watchedAt"
    | "id"
    | "title"
    | "releaseDate"
    | "runtime"
    | "watchedAt"
    | "rtCriticsRating"
    | "personalRating"
    | "posterImageThumbnail"
    | "posterImageBase64"
  > & {
    bestRelease?: Pick<MovieRelease, "id" | "resolution"> | null;
  };
};

const Movie = ({ movie }: MovieProps): JSX.Element => {
  const {
    id,
    title,
    releaseDate,
    runtime,
    watchedAt,
    rtCriticsRating,
    personalRating,
    posterImageThumbnail,
    posterImageBase64,
    bestRelease
  } = movie;

  const rating = personalRating ? personalRating * 10 : rtCriticsRating;
  const personalRatingText = personalRating
    ? `${personalRating}/10`
    : undefined;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex p-4">
        <div className="w-32 h-40 -mt-10">
          <Link to={`/movies/${id}`}>
            <Poster
              src={posterImageThumbnail}
              placeholder={posterImageBase64}
            />
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/movies/${id}`}>
            <h2 className="text-3xl leading-none ">
              {truncate(title, { length: 40 })}
            </h2>
          </Link>
          {rating && <Ratings score={rating}>{personalRatingText}</Ratings>}
          <div className="mt-2 text-sm font-thin flex">
            <span className="mr-2">
              <CalendarIcon className="mr-1 h-4 w-4 inline align-text-top" />
              {releaseYear(releaseDate)}
            </span>
            {bestRelease && (
              <span className="mr-2">
                <TvIcon className="mr-1 h-4 w-4 inline align-text-top" />
                {resolutionDisplay(bestRelease.resolution)}
              </span>
            )}
            {!watchedAt && runtime && (
              <span className="mr-2">
                <EyeIcon className="mr-1 h-4 w-4 inline align-text-top" />
                {formattedRuntime(runtime)}
              </span>
            )}
            {watchedAt && (
              <span>
                <EyeIcon className="mr-1 h-4 w-4 inline align-text-top" />
                {dayjs(watchedAt).format("YYYY-MM-DD")}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
