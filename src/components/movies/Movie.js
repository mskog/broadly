import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";

import { formattedRuntime, releaseYear } from "../../utilities";

import MoviePoster from "../shared/MoviePoster";
import Ratings from "../shared/Ratings";

export default function Movie({ movie }) {
  const { tmdbId, title, releaseDate, runtime, rtCriticsRating } = movie;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-2/5">
          <LazyLoad>
            <MoviePoster tmdbId={tmdbId} />
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <h2 className="text-3xl font-light leading-none ">{title}</h2>
          <Ratings score={rtCriticsRating} />
          <div className="mt-1 text-xs font-thin">
            <span className="mr-2">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {releaseYear(releaseDate)}
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
