import React from "react";

import { useHistory } from "react-router-dom";

import {
  useDeleteMovieMutation,
  useForceMovieMutation
} from "../../store/movies";

import Delete from "./Delete";
import Force from "./Force";

export default function Actions(props) {
  const {
    movie: { id, downloadAt }
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
      <Force downloadAt={downloadAt} handle={forceMovie} />
      <Delete downloadAt={downloadAt} handle={deleteMovie} />
    </>
  );
}
