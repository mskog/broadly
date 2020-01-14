import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { cdnImage } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import Ratings from "components/shared/Ratings";

const TV_SHOW_POSTER = gql`
  query TvShowPoster($tmdbId: ID!) {
    tvShowPoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

function image({ loading, error, data }) {
  if (loading || error) {
    return "https://image.tmdb.org/t/p/original/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";
  }
  return data.tvShowPoster.url;
}

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url(${url})`,
    backgroundSize: "cover"
  };
}

// TODO: Use lazy loading and fancy placeholders
// TODO: There are more details to show if we want
export default function Top({ tvShow }) {
  const {
    tmdbId,
    title,
    details: { firstAired, runtime, airedEpisodes, status, rating }
  } = tvShow;

  const url = image(
    useQuery(TV_SHOW_POSTER, {
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
            <Ratings score={rating * 10} />
          </h1>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem title="Status" value={status} />
              <LevelItem title="First Aired" value={firstAired} />
              <LevelItem title="Runtime" value={`${runtime}m`} />
              <LevelItem title="Aired episodes" value={airedEpisodes} />
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
}
