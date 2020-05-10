import React from "react";

import LazyLoad from "react-lazyload";

import { Link } from "react-router-dom";

import { useTvShowSummaryQuery } from "store/tv_shows";

import Poster from "components/tv_shows/Poster";

import ResultDetails from "./ResultDetails";

export default function Result({ result }) {
  const { imdbId, tmdbId, title } = result;

  const { data } = useTvShowSummaryQuery({
    imdbId
  });

  console.log(data);

  return (
    <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <LazyLoad>
            <Link to={`/search/tv_shows/details/${imdbId}`}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="w-full p-2">
          <Link to={`/search/tv_shows/details/${imdbId}`}>
            <h2 className="text-3xl font-light leading-none">{title}</h2>
          </Link>
          {data && (
            <ResultDetails
              rating={data.tvShowSummary.rating}
              firstAired={data.tvShowSummary.firstAired}
              runtime={data.tvShowSummary.runtime}
              status={data.tvShowSummary.status}
              airedEpisodes={data.tvShowSummary.airedEpisodes}
            />
          )}
        </div>
      </div>
    </div>
  );
}
