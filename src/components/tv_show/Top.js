import React from "react";

import { formattedRuntime, cdnImage } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import RtRating from "components/shared/RtRating";

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

export default function Top({ tvShow }) {
  const {
    name,
    status,
    backdropImage,
    tmdbDetails: { voteAverage, firstAirDate },
    traktDetails: { runtime, genres }
  } = tvShow;

  return (
    <div>
      <div
        className="w-full -mb-40 h-75vh"
        style={backgroundStyle(cdnImage(backdropImage))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
            {name}
          </h1>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem title="First Aired" value={firstAirDate} />
              <LevelItem title="Runtime" value={formattedRuntime(runtime)} />
              <LevelItem title="Status" value={status} />
              <LevelItem title="Rating">
                <RtRating rating={voteAverage * 10} />
              </LevelItem>
            </Level>
          </div>
          {genres && (
            <div className="flex flex-row justify-center pt-8 space-x-1">
              {genres.map(genre => {
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
