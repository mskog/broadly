import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faFilm } from "@fortawesome/free-solid-svg-icons";

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
            active ? "text-gray-900" : "text-gray-700"
          )}
        >
          {title}
        </p>
        <div className="text-sm font-thin text-gray-600">
          <span className="mr-2">
            <FontAwesomeIcon className="mr-1" icon={faCalendar} />
            {releaseYear(releaseDate)}
          </span>
          {runtime && (
            <span>
              <FontAwesomeIcon className="mr-1" icon={faClock} />
              {formattedRuntime(runtime)}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-center flex-1 text-gray-400">
        <FontAwesomeIcon className="text-3xl" icon={faFilm} />
      </div>
    </>
  );
};

export default MovieResult;
