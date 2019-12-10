import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";

import { formattedRuntime, releaseYear } from "../../utilities";

import MoviePoster from "../MoviePoster";
import Ratings from "../Ratings";

export default function Movie({ movie }) {
  const { tmdbId, title, releaseDate, runtime, rtCriticsRating } = movie;

  return (
    <div className="bg-background-blue-2 rounded shadow text-gray-100">
      <div className="flex p-4 h-48">
        <div className="w-1/3">
          <LazyLoad>
            <MoviePoster tmdbId={tmdbId} />
          </LazyLoad>
        </div>
        <div className="w-full p-4">
          <h2 className="text-3xl font-medium leading-none">{title}</h2>
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
