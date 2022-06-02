import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTv, faClock } from "@fortawesome/free-solid-svg-icons";

import { TvShow } from "generated/graphql";

import { thumbnail, formattedRuntime, releaseYear } from "utilities";

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
            <FontAwesomeIcon className="mr-1" icon={faCalendar} />
            {tmdbDetails?.firstAirDate && releaseYear(tmdbDetails.firstAirDate)}
          </span>
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          {traktDetails?.runtime && formattedRuntime(traktDetails.runtime)}
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col items-end justify-center flex-1",
          active ? "text-gray-200" : "text-gray-400"
        )}
      >
        <FontAwesomeIcon className="text-3xl" icon={faTv} />
      </div>
    </>
  );
};

export default TvShowResult;
