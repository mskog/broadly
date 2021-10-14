import React from "react";

import { useTvShowPosterQuery } from "generated/graphql";

import { thumbnail } from "utilities";
import { ApolloError } from "@apollo/client";

const IMAGE_PLACEHOLDER =
  "https://image.tmdb.org/t/p/w300/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";

function image({
  loading,
  error,
  data
}: {
  loading: boolean;
  error?: ApolloError;
  data?: { tvShowPoster: { url: string } };
}) {
  if (loading || error || !data) {
    return IMAGE_PLACEHOLDER;
  }
  return data.tvShowPoster.url;
}

// TODO: Use lazy loading and fancy placeholders
const Poster = ({ tmdbId }: { tmdbId: string }): JSX.Element => {
  const url = image(
    useTvShowPosterQuery({
      variables: { tmdbId },
      fetchPolicy: "cache-first"
    })
  );

  return (
    <img
      className="h-40 -mt-10 rounded w-30"
      alt="A poster"
      src={thumbnail(url)}
    />
  );
};
export default Poster;
