import React from "react";

import { useHistory } from "react-router-dom";

import { useDeleteMovieMutation, useForceMovieMutation } from "store/movies";

import Delete from "./Delete";
import Force from "./Force";

type ActionsProps = {
  movie: { id: number; bestRelease: any };
};

export default function Actions(props: ActionsProps) {
  const {
    movie: { id, bestRelease }
  } = props;

  const history = useHistory();

  const [deleteMovie] = useDeleteMovieMutation({
    id,
    update: () => {
      history.goBack();
    }
  });

  const [forceMovie] = useForceMovieMutation({
    id,
    update: () => {
      history.goBack();
    }
  });

  return (
    <>
      <Force bestRelease={bestRelease} handle={forceMovie} />
      <Delete bestRelease={bestRelease} handle={deleteMovie} />
    </>
  );
}
