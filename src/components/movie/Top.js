import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { releaseYear, formattedRuntime, cdnImage } from "../../utilities";

import LevelItem from "./LevelItem";
import Level from "./Level";
import RtRating from "../shared/RtRating";

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

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url(${url})`,
    backgroundSize: "cover"
  };
}

// TODO: Use lazy loading and fancy placeholders
export default function Top({ movie }) {
  const {
    tmdbId,
    title,
    releaseDate,
    runtime,
    rtCriticsRating,
    rtAudienceRating,
    personalRating,
    watched
  } = movie;

  const url = image(
    useQuery(MOVIE_POSTER, {
      variables: { tmdbId }
    })
  );

  let rating;
  if (watched) {
    rating = <LevelItem title="Rating" value={`${personalRating} / 10`} />;
  } else {
    rating = (
      <>
        <LevelItem title="Tomatometer">
          <RtRating rating={rtCriticsRating} />
        </LevelItem>
        <LevelItem title="Audience">
          <RtRating rating={rtAudienceRating} />
        </LevelItem>
      </>
    );
  }

  return (
    <div>
      <div
        className="w-full -mb-40 h-66vh"
        style={backgroundStyle(cdnImage(url))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl text-center text-gray-200 md:text-left">
            {title}
          </h1>
          <div className="md:pt-10">
            <Level>
              <LevelItem
                title="Release date"
                value={releaseYear(releaseDate)}
              />
              <LevelItem title="Runtime" value={formattedRuntime(runtime)} />
              {rating}
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
}
