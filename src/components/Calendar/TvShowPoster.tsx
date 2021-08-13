import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { thumbnail } from "utilities";

const IMAGE_PLACEHOLDER =
  "https://image.tmdb.org/t/p/w300/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";

const TV_SHOW_POSTER = gql`
  query TvShowPoster($tmdbId: ID!) {
    tvShowPoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

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
export default function TvShowPoster({ tmdbId }: { tmdbId: string }) {
  const url = image(
    useQuery(TV_SHOW_POSTER, {
      variables: { tmdbId },
      fetchPolicy: "cache-first"
    })
  );

  return <img className="rounded" alt="A poster" src={thumbnail(url)} />;
}
