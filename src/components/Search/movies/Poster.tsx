import React from "react";

import { useMoviePosterQuery } from "generated/graphql";

import { thumbnail } from "utilities";

const IMAGE_PLACEHOLDER =
  "https://image.tmdb.org/t/p/w300/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";

function image({
  loading,
  error,
  data
}: {
  loading: boolean;
  error?: any;
  data?: { moviePoster: { url: string } };
}) {
  if (loading || error || !data) {
    return IMAGE_PLACEHOLDER;
  }
  return data.moviePoster.url;
}

// TODO: Use lazy loading and fancy placeholders
export default function Poster({ tmdbId }: { tmdbId: string }) {
  const url = image(
    useMoviePosterQuery({
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
}
