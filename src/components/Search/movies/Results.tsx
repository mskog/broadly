import React from "react";

import { useMovieSearchQuery, MovieSearch } from "generated/graphql";

import { LoadingFull } from "components/shared";
import Result from "./Result";

const Results = ({ query }: { query: string }): JSX.Element => {
  const { data } = useMovieSearchQuery({
    variables: { query },
    fetchPolicy: "cache-and-network"
  });

  let results: JSX.Element | JSX.Element[] = <LoadingFull />;

  if (data) {
    if (data.movieSearch.length !== 0) {
      results = data.movieSearch.map(
        (
          result: Pick<
            MovieSearch,
            | "imdbId"
            | "tmdbId"
            | "title"
            | "downloaded"
            | "onWaitlist"
            | "existingMovieId"
          >
        ) => {
          return (
            <div key={result.imdbId} className="px-3 mb-10 md:w-full lg:w-1/2">
              <Result result={result} />
            </div>
          );
        }
      );
    } else {
      results = <>Nothing found</>;
    }
  }

  return <div className="flex-wrap mt-10 -mx-3 md:flex">{results}</div>;
};

export default Results;
