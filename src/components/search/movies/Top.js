import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Utilities from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";

const MOVIE_POSTER = gql`
  query MoviePoster($tmdbId: ID!) {
    moviePoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

function image({ loading, error, data }) {
  if (loading || error) {
    return "https://image.tmdb.org/t/p/w1280/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";
  }
  return data.moviePoster.url;
}

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover"
  };
}

// TODO: Use lazy loading and fancy placeholders
export default function Top({ movie }) {
  const { tmdbId, title, year } = movie;

  const url = image(
    useQuery(MOVIE_POSTER, {
      variables: { tmdbId }
    })
  );

  return (
    <div>
      <div
        className="w-full -mb-40 h-66vh"
        style={backgroundStyle(Utilities.cdnImage(url))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl text-center text-gray-200 md:text-left">
            {title}
          </h1>
          <div className="md:pt-10">
            <Level>
              <LevelItem title="Year" value={year} />
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
}
