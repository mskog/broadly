import React from "react";

import { useMovieSearchResultQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";

import Top from "./Top";
import Release from "./Release";

type DetailsProps = {
  match: {
    params: { imdbId: string };
  };
};

const Details = (props: DetailsProps): JSX.Element => {
  const {
    match: {
      params: { imdbId }
    }
  } = props;

  const { data } = useMovieSearchResultQuery({
    variables: { imdbId }
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="pb-20">
      <Top movie={data.movieSearchResult} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">
          {data.movieSearchResult.overview}
        </p>
        <div className="mt-4">
          {data.movieSearchResult.bestRelease && (
            <Release
              killer={data.movieSearchResult.hasKillerRelease}
              acceptable={data.movieSearchResult.hasAcceptableRelease}
              release={data.movieSearchResult.bestRelease}
              imdbId={imdbId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
