import React from "react";

import { CalendarIcon, ClockIcon, FilmIcon } from "@heroicons/react/24/solid";

import { Movie } from "generated/graphql";

import { thumbnail, formattedRuntime, releaseYear } from "utilities";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MovieResult = ({
  movie,
  active
}: {
  movie: Pick<
    Movie,
    "id" | "posterImageThumbnail" | "title" | "releaseDate" | "runtime"
  >;
  active: boolean;
}): JSX.Element => {
  const { id, posterImageThumbnail, title, releaseDate, runtime } = movie;

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
          {title}
        </p>
        <div className="text-sm  text-gray-400">
          <span className="mr-2">
            <CalendarIcon className="w-4 h-4 mr-1 inline align-text-top" />
            {releaseYear(releaseDate)}
          </span>
          {runtime && (
            <span>
              <ClockIcon className="w-4 h-4 mr-1 inline align-text-top" />
              {formattedRuntime(runtime)}
            </span>
          )}
        </div>
      </div>
      <div
        className={classNames(
          "flex flex-col items-end justify-center flex-1",
          active ? "text-gray-200" : "text-gray-400"
        )}
      >
        <FilmIcon className="w-8 h-8 mr-1 inline align-text-top" />
      </div>
    </>
  );
};

export default MovieResult;
