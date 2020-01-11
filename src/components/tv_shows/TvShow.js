import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import { releaseYear } from "utilities";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

export default function TvShow({ tvShow }) {
  const {
    id,
    name,
    tmdbDetails: { id: tmdbId, voteAverage, firstAirDate }
  } = tvShow;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-2/5">
          <LazyLoad>
            <Link to={`/tv_show/${id}`}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <Link to={`/tv_show/${id}`}>
            <h2 className="text-3xl font-light leading-none ">{name}</h2>
          </Link>
          <Ratings score={voteAverage * 10} />
          <div className="mt-1 text-xs font-thin">
            <span className="mr-2">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {releaseYear(firstAirDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
