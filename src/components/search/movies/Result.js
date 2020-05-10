import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

import { useMovieSummaryQuery } from "store/movies";

import Poster from "components/movies/Poster";

import ResultDetails from "./ResultDetails";

export default function Result({ result }) {
  const { imdbId, tmdbId, title } = result;

  const { data } = useMovieSummaryQuery({
    imdbId
  });

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <LazyLoad>
            <Link to={`/search/movies/details/${imdbId}`}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <Link to={`/search/movies/details/${imdbId}`}>
            <h2 className="text-3xl leading-none">{title}</h2>
          </Link>
          {data && (
            <ResultDetails
              rating={data.movieSummary.rating}
              released={data.movieSummary.released}
              runtime={data.movieSummary.runtime}
            />
          )}
        </div>
      </div>
    </div>
  );
}
