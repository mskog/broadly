import React from "react";

import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router-dom";

import Delete from "./Delete";
import Force from "./Force";

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export default function Actions(props) {
  const {
    movie: { id, downloadAt }
  } = props;

  const history = useHistory();

  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    variables: { id },
    update() {
      history.goBack();
    }
  });

  return (
    <>
      <Force downloadAt={downloadAt} handle={deleteMovie} />
      <Delete downloadAt={downloadAt} handle={deleteMovie} />
    </>
  );
}
