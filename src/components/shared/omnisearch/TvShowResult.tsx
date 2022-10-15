import React from "react";

import { CalendarIcon, TvIcon, ClockIcon } from "@heroicons/react/24/solid";

import { TvShow } from "generated/graphql";

import { thumbnail, formattedRuntime, releaseYear } from "utilities";
import { Calendar } from "components/Calendar";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TvShowResult = ({
  tvShow,
  active
}: {
  tvShow: Pick<
    TvShow,
    "id" | "posterImageThumbnail" | "name" | "tmdbDetails" | "traktDetails"
  >;
  active: boolean;
}): JSX.Element => {
  const { id, posterImageThumbnail, name, tmdbDetails, traktDetails } = tvShow;

  return (
    <>
      <div
        className={classNames(
          "flex h-10 w-10 flex-none items-center justify-center rounded-lg"
        )}
      >
        <img
          src={thumbnail(posterImageThumbnail || "")}
          alt=""
          className="w-12 rounded"
        />
      </div>
      <div className="ml-4 flex-auto">
        <p
          className={classNames(
            "text-xl font-medium",
            active ? "text-gray-200" : "text-gray-400"
          )}
        >
          {name}
        </p>
        <div className="text-sm text-gray-400">
          <span className="mr-2">
            <CalendarIcon className="w-4 h-4 mr-1 inline align-text-top" />
            {tmdbDetails?.firstAirDate && releaseYear(tmdbDetails.firstAirDate)}
          </span>
          <ClockIcon className="w-4 h-4 mr-1 inline align-text-top" />
          {traktDetails?.runtime && formattedRuntime(traktDetails.runtime)}
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col items-end justify-center flex-1",
          active ? "text-gray-200" : "text-gray-400"
        )}
      >
        <TvIcon className="w-8 h-8 mr-1 inline align-text-top" />
      </div>
    </>
  );
};

export default TvShowResult;
