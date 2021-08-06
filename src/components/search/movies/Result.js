import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import { truncate } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";

import { useMovieSummaryQuery } from "store/movies";

import Poster from "components/search/movies/Poster";

import ResultDetails from "./ResultDetails";

export default function Result({ result }) {
  const { imdbId, tmdbId, title, downloaded, onWaitlist, existingMovieId } =
    result;

  const { data } = useMovieSummaryQuery({
    imdbId
  });

  const movieUrl =
    downloaded || onWaitlist
      ? `/movies/${existingMovieId}`
      : `/search/movies/details/${imdbId}`;

  return (
    <div className="relative text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <LazyLoad>
            <Link to={movieUrl}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <Link to={movieUrl}>
            <h2 className="space-x-2 text-3xl leading-none">
              <span>{truncate(title, { length: 50 })}</span>
            </h2>
          </Link>
          {data && (
            <ResultDetails
              rating={data.movieSummary.rating}
              released={data.movieSummary.released}
              runtime={data.movieSummary.runtime}
            />
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 p-2 text-gray-300">
        {downloaded && (
          <FontAwesomeIcon className="text-2xl align-middle" icon={faCheck} />
        )}
        {!downloaded && onWaitlist && (
          <FontAwesomeIcon className="text-2xl align-middle" icon={faClock} />
        )}
      </div>
    </div>
  );
}
