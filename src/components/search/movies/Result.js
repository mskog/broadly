import React from "react";

import LazyLoad from "react-lazyload";

import { Link } from "react-router-dom";

import Poster from "components/movies/Poster";

export default function Result({ result }) {
  const { imdbId, tmdbId, title } = result;

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-2/5">
          <LazyLoad>
            <Link to={`/search/movies/details/${imdbId}`}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <Link to={`/search/movies/details/${imdbId}`}>
            <h2 className="text-3xl font-light leading-none">{title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
