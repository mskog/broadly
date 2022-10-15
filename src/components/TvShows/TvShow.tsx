import React from "react";

import { ClockIcon, CalendarIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";

import truncate from "lodash/truncate";

import { formattedRuntime, releaseYear } from "utilities";

import { TvShowsQuery } from "generated/graphql";

import Ratings from "components/shared/Ratings";
import { Poster } from "components/shared";

const TvShow = ({
  tvShow
}: {
  tvShow: TvShowsQuery["tvShows"][0];
}): JSX.Element => {
  const { id, name, posterImageThumbnail, traktDetails, posterImageBase64 } =
    tvShow;
  const { voteAverage, firstAirDate } = tvShow.tmdbDetails || {};

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex p-4">
        <div className="w-32 h-40 -mt-10">
          <Link to={`/tv_shows/${id}`}>
            <div>
              <Poster
                placeholder={posterImageBase64}
                src={posterImageThumbnail}
              />
            </div>
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/tv_shows/${id}`}>
            <h2 className="text-3xl leading-none">
              {truncate(name, { length: 40 })}
            </h2>
          </Link>

          {voteAverage && <Ratings score={parseInt(voteAverage, 10) * 10} />}
          <div className="mt-2 text-sm font-thin">
            <span className="mr-2">
              <CalendarIcon className="mr-1 w-4 h-4 inline align-text-top" />
              {firstAirDate && releaseYear(firstAirDate)}
            </span>
            <span>
              <ClockIcon className="mr-1 w-4 h-4 inline align-text-top" />
              {traktDetails?.runtime && formattedRuntime(traktDetails.runtime)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShow;
