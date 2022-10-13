import React from "react";

import { EyeIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

import { TvShowQuery, useDownloadSeasonMutation } from "generated/graphql";

import Episodes from "./Episodes";
import ActionButton from "./ActionButton";

type SeasonProps = {
  tvShowId: number;
  season: Pick<
    TvShowQuery["tvShow"]["seasons"][0],
    | "number"
    | "downloaded"
    | "watched"
    | "episodes"
    | "downloadRequested"
    | "aired"
  >;
};

const statusIcon = (downloaded: boolean, watched: boolean): JSX.Element => {
  if (watched) {
    return (
      <div className="flex space-x-1">
        <span>
          <EyeIcon className="w-6 h-6" />
        </span>
        <span>Watched</span>
      </div>
    );
  } else if (downloaded) {
    <div className="flex space-x-1">
      <span>
        <ArrowDownIcon className="w-6 h-6" />
      </span>
      <span>Downloaded</span>
    </div>;
  }
  return <></>;
};

const Season = ({ tvShowId, season }: SeasonProps): JSX.Element => {
  const { downloaded, watched, episodes, number, downloadRequested, aired } =
    season;

  const [download] = useDownloadSeasonMutation({
    variables: {
      tvShowId: tvShowId,
      seasonNumber: number
    },
    refetchQueries: ["TvShow"]
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        {statusIcon(downloaded, watched)}
      </div>
      <div className="flex justify-center">
        {downloadRequested && <span>Download Requested</span>}
      </div>
      {!downloadRequested && (
        <div className="justify-center flex">
          <div className="w-full md:w-1/2 flex justify-center">
            <ActionButton handle={download} title="Download" />
          </div>
        </div>
      )}
      {<Episodes episodes={episodes} />}
    </div>
  );
};

export default Season;
