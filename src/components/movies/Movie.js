import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { formattedRuntime, releaseYear } from "utilities";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

export default function Movie({ movie }) {
  const {
    id,
    title,
    releaseDate,
    runtime,
    rtCriticsRating,
    posterImage
  } = movie;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <Link to={`/movies/${id}`}>
            <Poster src={posterImage} />
          </Link>
        </div>
        <div className="w-full">
          <Link to={`/movies/${id}`}>
            <h2 className="text-3xl leading-none ">{title}</h2>
          </Link>
          <Ratings score={rtCriticsRating} />
          <div className="mt-2 text-sm font-thin">
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
