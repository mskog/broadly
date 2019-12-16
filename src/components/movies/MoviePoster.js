import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { thumbnail } from "../../utilities";

const MOVIE_POSTER = gql`
  query MoviePoster($tmdbId: ID!) {
    moviePoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

function image({ loading, error, data }) {
  if (loading || error) {
    return "https://image.tmdb.org/t/p/original/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";
  }
  return data.moviePoster.url;
}

// TODO: Use lazy loading and fancy placeholders
export default function MoviePoster({ tmdbId }) {
  const url = image(
    useQuery(MOVIE_POSTER, {
      variables: { tmdbId }
    })
  );

  return (
    <img className="h-40 -mt-10 rounded" alt="A poster" src={thumbnail(url)} />
  );
}
