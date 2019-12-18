import React from "react";

import { useMovieQuery } from "../../store/movies";

import Top from "./Top";
import Actions from "./Actions";

function Movie(props) {
  const {
    history,
    match: {
      params: { id }
    }
  } = props;

  const { data } = useMovieQuery({ id });

  if (!data) {
    return null;
  }

  const { overview } = data.movie;

  return (
    <div className="pb-20">
      <Top movie={data.movie} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">{overview}</p>
        <div className="flex flex-col pt-4 -mx-2 md:flex-row">
          <Actions history={history} movie={data.movie} />
        </div>
      </div>
    </div>
  );
}

export default Movie;
