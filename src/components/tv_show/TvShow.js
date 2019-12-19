import React from "react";

import { useTvShowQuery } from "../../store/tv_shows";

import Top from "./Top";
import Actions from "./Actions";

function TvShow(props) {
  const {
    history,
    match: {
      params: { id }
    }
  } = props;

  const { data } = useTvShowQuery({ id });

  if (!data) {
    return null;
  }

  const {
    traktDetails: { overview }
  } = data.tvShow;

  return (
    <div className="pb-20">
      <Top tvShow={data.tvShow} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">{overview}</p>
        <div className="flex flex-col pt-4 -mx-2 md:flex-row">
          <Actions history={history} tvShow={data.tvShow} />
        </div>
      </div>
    </div>
  );
}

export default TvShow;
