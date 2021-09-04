import React from "react";

import { useTvShowSearchQuery } from "store/search";

import Loading from "components/shared/LoadingFull";
import Result from "./Result";

export default function Results({ query }: { query: string }) {
  const { data } = useTvShowSearchQuery({
    query
  });

  let results = <Loading />;

  if (data) {
    if (data.tvShowSearch.length !== 0) {
      results = data.tvShowSearch.map((result: any) => {
        return (
          <div key={result.imdbId} className="px-3 mb-10 md:w-full lg:w-1/2">
            <Result result={result} />
          </div>
        );
      });
    } else {
      results = <>Nothing found</>;
    }
  }

  return <div className="flex-wrap mt-10 -mx-3 md:flex">{results}</div>;
}
