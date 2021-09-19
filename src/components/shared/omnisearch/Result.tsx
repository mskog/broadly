/* eslint-disable no-underscore-dangle */
import React from "react";

import MovieResult from "./MovieResult";
import TvShowResult from "./TvShowResult";

export default function Result({
  result,
  handleClose
}: {
  result: any;
  handleClose: any;
}) {
  switch (result.__typename) {
    case "Movie":
      return <MovieResult movie={result} handleClose={handleClose} />;
    case "TvShow":
      return <TvShowResult tvShow={result} handleClose={handleClose} />;
    default:
      return <></>;
  }
}
