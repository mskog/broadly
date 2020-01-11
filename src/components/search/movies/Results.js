import React from "react";

import { useMovieSearchQuery } from "store/search";

import Result from "./Result";

export default function Results({ query }) {
  const { data } = useMovieSearchQuery({
    query
  });

  let results = [];

  if (data) {
    results = data.movieSearch.map(result => {
      return (
        <div key={result.imdbId} className="px-3 mb-10 md:w-full lg:w-1/2">
          <Result result={result} />
        </div>
      );
    });
  }

  return (
    <div className="flex-wrap h-screen mt-10 -mx-3 md:flex">{results}</div>
  );
}
