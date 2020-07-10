import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faFilm } from "@fortawesome/free-solid-svg-icons";

import { thumbnail, formattedRuntime, releaseYear } from "utilities";

export default function MovieResult({ movie, handleClose }) {
  const { id, posterImage, title, releaseDate, runtime } = movie;

  return (
    <Link key={`result-movie-${id}`} onClick={handleClose} to={`/movies/${id}`}>
      <div className="flex -mx-2">
        <div className="flex-initial">
          <img src={thumbnail(posterImage)} alt="" className="w-12 rounded" />
        </div>
        <div className="flex flex-col px-4">
          <h2 className="text-xl text-gray-800">{title}</h2>
          <div className="text-sm font-thin text-gray-600">
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
        <div className="flex flex-col items-end justify-center flex-1 p-4">
          <FontAwesomeIcon className="text-3xl" icon={faFilm} />
        </div>
      </div>
    </Link>
  );
}
