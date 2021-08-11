import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faTv } from "@fortawesome/free-solid-svg-icons";

import { thumbnail, formattedRuntime, releaseYear } from "utilities.ts";

export default function TvShowResult({ tvShow, handleClose }) {
  const {
    id,
    posterImageThumbnail,
    name,
    tmdbDetails: { firstAirDate },
    traktDetails: { runtime }
  } = tvShow;

  return (
    <Link onClick={handleClose} to={`/tv_shows/${id}`}>
      <div className="flex -mx-2">
        <div className="flex-initial">
          <img
            src={thumbnail(posterImageThumbnail)}
            alt=""
            className="w-12 rounded"
          />
        </div>
        <div className="flex flex-col px-4">
          <h2 className="text-xl text-gray-800">{name}</h2>
          <div className="text-sm font-thin text-gray-600">
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

        <div className="flex flex-col items-end justify-center flex-1 p-4">
          <FontAwesomeIcon className="text-3xl" icon={faTv} />
        </div>
      </div>
    </Link>
  );
}
