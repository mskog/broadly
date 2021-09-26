import React from "react";

import { useHistory } from "react-router-dom";

import {
  useDeleteMovieMutation,
  useForceMovieMutation,
  Movie
} from "generated/graphql";

import Delete from "./Delete";
import Force from "./Force";

export default function Actions({
  movie
}: {
  movie: Pick<Movie, "id" | "bestRelease">;
}) {
  const { id, bestRelease } = movie;

  const history = useHistory();

  const [deleteMovie] = useDeleteMovieMutation({
    variables: { id },
    update: () => {
      history.goBack();
    }
  });

  const [forceMovie] = useForceMovieMutation({
    variables: { id },
    update: () => {
      history.goBack();
    }
  });

  return (
    <>
      <Force bestRelease={bestRelease} handle={forceMovie} />
      <Delete handle={deleteMovie} />
    </>
  );
}
