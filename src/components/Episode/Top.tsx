import React from "react";
import { Link } from "react-router-dom";
import { padStart } from "lodash";
import { DateTime } from "luxon";

import { Episode, EpisodeRelease } from "generated/graphql";

import { formattedRuntime, cdnImage, resolutionDisplay } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";

function backgroundStyle(url: string) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
}

function seasonEpisode(season: string, episodeNumber: string) {
  return `S${padStart(season, 2, "0")}E${padStart(episodeNumber, 2, "0")}`;
}

type TopProps = {
  episode: Pick<
    Episode,
    "season" | "episode" | "stillImage" | "tmdbDetails" | "watchedAt" | "tvShow"
  > & { bestRelease?: Pick<EpisodeRelease, "resolution"> };
};

const Top = ({ episode }: TopProps): JSX.Element => {
  const {
    season,
    episode: episodeNumber,
    stillImage,
    tmdbDetails,
    watchedAt,
    tvShow: { id: tvShowId, name: tvShowName, traktDetails },
    bestRelease
  } = episode;

  return (
    <div>
      <div
        className="w-full -mb-40 h-75vh"
        style={backgroundStyle(cdnImage(stillImage || ""))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <Link to={`/tv_shows/${tvShowId}`}>
            <h1 className="text-5xl leading-none text-center text-gray-200 md:text-left">
              {tvShowName}
            </h1>
          </Link>
          <h2 className="text-xl text-center text-gray-300 md:text-left">
            {tmdbDetails?.name}
          </h2>
          <div className="capitalize md:pt-10">
            <Level>
              {season && episodeNumber ? (
                <LevelItem
                  title="Episode"
                  value={seasonEpisode(
                    season.toString(),
                    episodeNumber?.toString()
                  )}
                />
              ) : (
                <></>
              )}
              <LevelItem
                hideIfBlank
                title="Watched"
                value={DateTime.fromISO(watchedAt).toISODate()}
              />
              {traktDetails?.runtime ? (
                <LevelItem
                  title="Runtime"
                  value={formattedRuntime(traktDetails.runtime)}
                />
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
            </Level>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
