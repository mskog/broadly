import React from "react";

import { MovieSearch, useMoviePosterQuery } from "generated/graphql";

import { cdnImage } from "utilities";

import { Level, LevelItem } from "components/shared";
import { ApolloError } from "@apollo/client";

function image({
  loading,
  error,
  data
}: {
  loading: boolean;
  error?: ApolloError;
  data?: { moviePoster: { url: string } };
}) {
  if (loading || error || !data) {
    return "https://image.tmdb.org/t/p/w1280/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";
  }
  return data.moviePoster.url;
}

function backgroundStyle(url: string) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover"
  };
}
type TopProps = {
  movie: Pick<MovieSearch, "title" | "tmdbId" | "year">;
};

// TODO: Use lazy loading and fancy placeholders
const Top = ({ movie }: TopProps): JSX.Element => {
  const { tmdbId, title, year } = movie;

  const url = image(
    useMoviePosterQuery({
      variables: { tmdbId }
    })
  );

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
              <LevelItem title="Year" value={year?.toString()} />
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
