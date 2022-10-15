import React from "react";

import { Movie } from "generated/graphql";

import dayjs from "dayjs";

import capitalize from "lodash/capitalize";

import {
  releaseYear,
  formattedRuntime,
  cdnImage,
  resolutionDisplay
} from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import PersonalRating from "./PersonalRating";

function backgroundStyle(url: string, placeholder?: string) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}'), url('${placeholder}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

// TODO: Use lazy loading and fancy placeholders
const Top = ({
  movie
}: {
  movie: Pick<
    Movie,
    | "id"
    | "title"
    | "releaseDate"
    | "availableDate"
    | "runtime"
    | "rtCriticsRating"
    | "rtAudienceRating"
    | "personalRating"
    | "watched"
    | "backdropImage"
    | "backdropImageBase64"
    | "bestRelease"
    | "waitlist"
    | "releaseDates"
  >;
}): JSX.Element => {
  const {
    id,
    title,
    releaseDate,
    availableDate,
    runtime,
    personalRating,
    watched,
    backdropImage,
    backdropImageBase64,
    bestRelease,
    waitlist,
    releaseDates
  } = movie;

  const date = waitlist ? availableDate : releaseYear(releaseDate);

  const topRelease = releaseDates.find((releaseDate) => {
    return releaseDate.releaseType === "4K UHD";
  });

  const topReleaseDate = topRelease ? dayjs(topRelease.releaseDate) : null;

  return (
    <div>
      <div
        className="w-full -mb-40 h-66vh"
        style={backgroundStyle(
          cdnImage(backdropImage || ""),
          backdropImageBase64
        )}
      />
      <div className="container h-full max-w-3xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
            {title}
          </h1>
          <div className="md:pt-10">
            <Level>
              <LevelItem title="Release date" value={date} />
              {topReleaseDate ? (
                <LevelItem
                  title="4K Blu-ray"
                  value={topReleaseDate.format("YYYY-MM-DD")}
                />
              ) : (
                <></>
              )}
              {runtime ? (
                <LevelItem title="Runtime" value={formattedRuntime(runtime)} />
              ) : (
                <></>
              )}
              {bestRelease ? (
                <LevelItem
                  title="Resolution"
                  value={resolutionDisplay(bestRelease.resolution)}
                />
              ) : (
                <></>
              )}
              {bestRelease ? (
                <LevelItem
                  title="Container"
                  value={capitalize(bestRelease.source)}
                />
              ) : (
                <></>
              )}
              {personalRating ? (
                <LevelItem title="Rating">
                  <PersonalRating id={id} rating={personalRating} />
                </LevelItem>
              ) : (
                <></>
              )}
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
