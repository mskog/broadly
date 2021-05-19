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

import Ratings from "components/shared/Ratings";
import Poster from "components/movies/Poster";

export default function Movie({ movie }) {
  const { title, ptpRating, cover, imdbId, year } = movie;

  const rating = ptpRating;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex p-4">
        <div className="w-32 h-40 -mt-10">
          <Link to={`/search/movies/details/${imdbId}`}>
            <Poster src={cover} />
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/search/movies/details/${imdbId}`}>
            <h2 className="text-3xl leading-none ">
              {truncate(title, { length: 40 })}
            </h2>
          </Link>
          <Ratings score={rating}>{rating}</Ratings>
          <div className="mt-2 text-sm font-thin">
            <span>
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
