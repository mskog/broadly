import React from "react";

import { useTvShowSearchQuery } from "store/search";

import Loading from "components/shared/LoadingFull";
import Result from "./Result";

export default function Results({ query }) {
  const { data } = useTvShowSearchQuery({
    query
  });

  let results = <Loading />;

  if (data) {
    results = data.tvShowSearch.map(result => {
      return (
        <div key={result.imdbId} className="px-3 mb-10 md:w-full lg:w-1/2">
          <Result result={result} />
        </div>
      );
    });
  }

  return <div className="flex-wrap mt-10 -mx-3 md:flex">{results}</div>;
}
