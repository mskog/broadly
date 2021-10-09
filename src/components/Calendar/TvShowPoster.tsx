import React from "react";
import { useTvShowPosterQuery } from "generated/graphql";

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
  data: any;
}) {
  if (loading || error) {
    return IMAGE_PLACEHOLDER;
  }
  return data.tvShowPoster.url;
}

// TODO: Use lazy loading and fancy placeholders
const TvShowPoster = ({ tmdbId }: { tmdbId: string }): JSX.Element => {
  const url = image(
    useTvShowPosterQuery({
      variables: { tmdbId },
      fetchPolicy: "cache-first"
    })
  );

  return <img className="rounded" alt="A poster" src={thumbnail(url)} />;
};

export default TvShowPoster;
