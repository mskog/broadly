import React from "react";

import { releaseYear, formattedRuntime, cdnImage } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import RtRating from "components/shared/RtRating";
import PersonalRating from "./PersonalRating";

function backgroundStyle(url) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

// TODO: Use lazy loading and fancy placeholders
export default function Top({ movie }) {
  const {
    id,
    title,
    releaseDate,
    runtime,
    rtCriticsRating,
    rtAudienceRating,
    personalRating,
    watched,
    backdropImage
  } = movie;

  let rating;
  if (watched) {
    rating = (
      <LevelItem title="Rating">
        <PersonalRating id={id} rating={personalRating} />
      </LevelItem>
    );
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
        style={backgroundStyle(cdnImage(backdropImage))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
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
