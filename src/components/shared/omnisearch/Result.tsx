/* eslint-disable no-underscore-dangle */
import React from "react";

import { Movie, TvShow } from "generated/graphql";

import MovieResult from "./MovieResult";
import TvShowResult from "./TvShowResult";

const Result = ({
  result,
  handleClose
}: {
  result: Movie | TvShow;
  handleClose: () => void;
}): JSX.Element => {
  switch (result.__typename) {
    case "Movie":
      return <MovieResult movie={result} handleClose={handleClose} />;
    case "TvShow":
      return <TvShowResult tvShow={result} handleClose={handleClose} />;
    default:
      return <></>;
  }
};

export default Result;
