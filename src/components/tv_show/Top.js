import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { cdnImage } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import RtRating from "components/shared/RtRating";

const TV_SHOW_POSTER = gql`
  query TvShowPoster($tmdbId: ID!) {
    tvShowPoster(tmdbId: $tmdbId) {
      url
    }
  }
`;

function image({ loading, error, data }) {
  if (loading || error) {
    return "";
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
export default function Top({ tvShow }) {
  const {
    name,
    status,
    tmdbDetails: { voteAverage, firstAirDate, id: tmdbId }
  } = tvShow;

  const url = image(
    useQuery(TV_SHOW_POSTER, {
      variables: { tmdbId }
    })
  );

  const rating = (
    <>
      <LevelItem title="Rating">
        <RtRating rating={voteAverage * 10} />
      </LevelItem>
    </>
  );

  return (
    <div>
      <div
        className="w-full -mb-40 h-75vh"
        style={backgroundStyle(cdnImage(url))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
            {name}
          </h1>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem title="First Aired" value={firstAirDate} />
              <LevelItem title="Status" value={status} />
              {rating}
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
}
