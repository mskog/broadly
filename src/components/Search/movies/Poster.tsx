import React from "react";

import { useQuery, gql } from "@apollo/client";

import { thumbnail } from "utilities";

const IMAGE_PLACEHOLDER =
  "https://image.tmdb.org/t/p/w300/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";

const MOVIE_POSTER = gql`
  query MoviePoster($tmdbId: ID!) {
    moviePoster(tmdbId: $tmdbId) {
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
  return data.moviePoster.url;
}

// TODO: Use lazy loading and fancy placeholders
export default function Poster({ tmdbId }: { tmdbId: string }) {
  const url = image(
    useQuery(MOVIE_POSTER, {
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
