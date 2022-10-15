import React from "react";

import dayjs from "dayjs";

import { useHistory } from "react-router-dom";

import { Movie } from "generated/graphql";

import Delete from "./Delete";
import Force from "./Force";
import Download from "./Download";

const Actions = ({
  movie
}: {
  movie: Pick<Movie, "id" | "bestRelease" | "imdbId" | "downloadAt">;
}): JSX.Element => {
  const { id, bestRelease, imdbId, downloadAt } = movie;

  const downloaded = dayjs(downloadAt).isBefore(dayjs());

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {!downloaded && bestRelease && <Force id={id} handle={goBack} />}
      {!downloaded && <Delete id={id} handle={goBack} />}
      {imdbId && downloaded && (
        <Download imdbId={imdbId} bestRelease={bestRelease} handle={goBack} />
      )}
    </>
  );
};

export default Actions;
