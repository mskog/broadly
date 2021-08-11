import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { thumbnail } from "utilities.ts";

const IMAGE_PLACEHOLDER =
  "https://image.tmdb.org/t/p/w300/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";

const MOVIE_POSTER = gql`
  query MoviePoster($tmdbId: ID!) {
    moviePoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

function image({ loading, error, data }) {
  if (loading || error) {
    return IMAGE_PLACEHOLDER;
  }
  return data.moviePoster.url;
}

// TODO: Use lazy loading and fancy placeholders
export default function Poster({ tmdbId }) {
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
