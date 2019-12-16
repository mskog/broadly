import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Top from "./Top";

const MOVIE = gql`
  query Movie($id: ID!) {
    movie(id: $id) {
      id
      tmdbId
      title
      releaseDate
      runtime
      rtCriticsRating
      rtAudienceRating
      watched
      personalRating
      overview
    }
  }
`;

export default function Movie(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  const { data } = useQuery(MOVIE, {
    variables: { id }
  });

  if (!data) {
    return null;
  }

  const { overview } = data.movie;

  return (
    <div className="pb-20">
      <Top movie={data.movie} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="text-lg text-gray-400 md:pt-4">{overview}</p>
      </div>
    </div>
  );
}
