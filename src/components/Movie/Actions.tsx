import React from "react";
import { DateTime } from "luxon";

import { useHistory } from "react-router-dom";

import {
  useDeleteMovieMutation,
  useForceMovieMutation,
  useDownloadMovieMutation,
  Movie
} from "generated/graphql";

import Delete from "./Delete";
import Force from "./Force";
import Download from "./Download";

const Actions = ({
  movie
}: {
  movie: Pick<Movie, "id" | "bestRelease" | "imdbId" | "downloadAt">;
}): JSX.Element => {
  const { id, bestRelease, imdbId, downloadAt } = movie;

  const downloaded = DateTime.fromISO(downloadAt) <= DateTime.local();

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

  const downloadMovie = () => {
    history.goBack();
  };

  return (
    <>
      {!downloaded && <Force bestRelease={bestRelease} handle={forceMovie} />}
      {!downloaded && <Delete handle={deleteMovie} />}
      {imdbId && downloaded && (
        <Download
          imdbId={imdbId}
          bestRelease={bestRelease}
          handle={downloadMovie}
        />
      )}
    </>
  );
};

export default Actions;
