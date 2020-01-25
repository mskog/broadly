import React from "react";
import { DateTime } from "luxon";

import { useMovieQuery } from "store/movies";

import Loading from "components/shared/LoadingFull";

import Top from "./Top";
import Actions from "./Actions";
import ReleaseInformation from "./ReleaseInformation";

function Movie(props) {
  const {
    history,
    match: {
      params: { id }
    }
  } = props;

  const { data } = useMovieQuery({ id });

  if (!data) {
    return <Loading />;
  }

  const {
    overview,
    bestRelease,
    hasKillerRelease,
    hasAcceptableRelease,
    downloadAt
  } = data.movie;

  const downloaded = DateTime.fromISO(downloadAt) <= DateTime.local();

  return (
    <div className="pb-20">
      <Top movie={data.movie} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="my-4 text-lg text-gray-400">{overview}</p>
        {bestRelease && !downloaded && (
          <div className="mt-10">
            <ReleaseInformation
              acceptable={hasAcceptableRelease}
              killer={hasKillerRelease}
              release={bestRelease}
            />
          </div>
        )}
        {!downloaded && (
          <div className="flex flex-col pt-4 -mx-2 md:flex-row">
            <Actions history={history} movie={data.movie} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
