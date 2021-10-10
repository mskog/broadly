import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import { truncate } from "lodash";

import { formattedRuntime, releaseYear } from "utilities";

import { TvShow as TvShowType } from "generated/graphql";

import Ratings from "components/shared/Ratings";
import Poster from "./Poster";

export default function TvShow({ tvShow }: { tvShow: TvShowType }) {
  const { id, name, posterImageThumbnail, traktDetails } = tvShow;
  const { voteAverage, firstAirDate } = tvShow.tmdbDetails || {};

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex p-4">
        <LazyLoad>
          <div className="h-40 -mt-10 w-28">
            <Link to={`/tv_shows/${id}`}>
              <div>
                <Poster src={posterImageThumbnail} />
              </div>
            </Link>
          </div>
        </LazyLoad>
        <div className="w-full pl-4">
          <Link to={`/tv_shows/${id}`}>
            <h2 className="text-3xl leading-none ">
              {truncate(name, { length: 40 })}
            </h2>
          </Link>

          {voteAverage && <Ratings score={parseInt(voteAverage, 10) * 10} />}
          <div className="mt-2 text-sm font-thin">
            <span className="mr-2">
              <FontAwesomeIcon className="mr-1" icon={faCalendar} />
              {firstAirDate && releaseYear(firstAirDate)}
            </span>
            <span>
              <FontAwesomeIcon className="mr-1" icon={faClock} />
              {traktDetails?.runtime && formattedRuntime(traktDetails.runtime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}