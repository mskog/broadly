import React from "react";

import LazyLoad from "react-lazyload";
import { CheckIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import truncate from "lodash/truncate";

import { TvShowSearch, useTvShowSummaryQuery } from "generated/graphql";

import Poster from "./Poster";
import ResultDetails from "./ResultDetails";

const Result = ({
  result
}: {
  result: Pick<
    TvShowSearch,
    "imdbId" | "tmdbId" | "title" | "exists" | "existingTvShowId"
  >;
}): JSX.Element => {
  const { imdbId, tmdbId, title, exists, existingTvShowId } = result;

  if (!imdbId || !tmdbId) {
    return <></>;
  }

  const { data } = useTvShowSummaryQuery({
    variables: { imdbId },
    context: { useApolloNetworkStatus: false }
  });

  const tvShowUrl = exists
    ? `/tv_shows/${existingTvShowId}`
    : `/search/tv_shows/details/${imdbId}`;

  return (
    <div className="relative text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
      <div className="flex h-40 p-4">
        <div className="relative w-3/5 md:w-2/5">
          <LazyLoad>
            <Link to={tvShowUrl}>
              <Poster tmdbId={tmdbId} />
            </Link>
          </LazyLoad>
        </div>
        <div className="flex flex-col w-full p-2">
          <Link to={tvShowUrl}>
            <h2 className="space-x-2 text-3xl leading-none">
              {truncate(title, { length: 50 })}
            </h2>
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

      <div className="absolute top-0 right-0 p-2 text-gray-300">
        {exists && <CheckIcon className="w-6 h-6" />}
      </div>
    </div>
  );
};

export default Result;
