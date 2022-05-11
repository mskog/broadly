import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons";

import { TvShowQuery } from "generated/graphql";

import Episodes from "./Episodes";

type SeasonProps = {
  season: Pick<
    TvShowQuery["tvShow"]["seasons"][0],
    "number" | "downloaded" | "watched" | "episodes"
  >;
};

const statusIcon = (downloaded: boolean, watched: boolean): JSX.Element => {
  if (watched) {
    return (
      <div className="flex space-x-1">
        <span>
          <FontAwesomeIcon icon={faEye} />
        </span>
        <span>Watched</span>
      </div>
    );
  } else if (downloaded) {
    <div className="flex space-x-1">
      <span>
        <FontAwesomeIcon icon={faDownload} />
      </span>
      <span>Downloaded</span>
    </div>;
  }
  return <></>;
};

const Season = ({ season }: SeasonProps): JSX.Element => {
  const { downloaded, watched, episodes } = season;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center">
        {statusIcon(downloaded, watched)}
      </div>
      {<Episodes episodes={episodes} />}
    </div>
  );
};

export default Season;
