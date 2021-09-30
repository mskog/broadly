import React from "react";

import { formattedRuntime, cdnImage } from "utilities";

import { TvShow } from "generated/graphql";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import RtRating from "components/shared/RtRating";

function backgroundStyle(url: string) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

type TopProps = {
  tvShow: Pick<
    TvShow,
    "id" | "name" | "status" | "backdropImage" | "tmdbDetails" | "traktDetails"
  >;
};

export default function Top({ tvShow }: TopProps) {
  const { name, status, backdropImage, tmdbDetails, traktDetails } = tvShow;

  const { voteAverage, firstAirDate } = tmdbDetails || {};
  const { genres, runtime, network } = traktDetails || {};

  return (
    <div>
      <div
        className="w-full -mb-40 h-75vh"
        style={backgroundStyle(cdnImage(backdropImage || ""))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
            {name}
          </h1>
          <h2 className="pt-2 text-xl text-center text-gray-500 md:text-left">
            {network}
          </h2>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem title="First Aired" value={firstAirDate} />
              {runtime && (
                <LevelItem title="Runtime" value={formattedRuntime(runtime)} />
              )}
              <LevelItem title="Status" value={status} />
              <LevelItem title="Rating">
                {voteAverage && (
                  <RtRating rating={parseInt(voteAverage, 10) * 10} />
                )}
              </LevelItem>
            </Level>
          </div>
          {genres && (
            <div className="flex flex-row justify-center pt-8 space-x-1">
              {genres.map((genre: any) => {
                return (
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-300 text-gray-800">
                    {genre}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
