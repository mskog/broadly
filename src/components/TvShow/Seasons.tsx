import React, { useState } from "react";
import sortBy from "lodash/sortBy";

import { TvShowQuery } from "generated/graphql";

import SeasonSelection from "./SeasonSelection";
import Season from "./Season";

type SeasonsProps = {
  tvShowId: number;
  seasons: Pick<
    TvShowQuery["tvShow"]["seasons"][0],
    | "number"
    | "downloaded"
    | "watched"
    | "episodes"
    | "downloadRequested"
    | "aired"
  >[];
};

const Seasons = ({ tvShowId, seasons }: SeasonsProps): JSX.Element => {
  const sortedSeasons = sortBy(seasons, (season) => season.number);
  const availableSeasons = sortedSeasons.filter((season) => {
    return season.episodes.filter((episode) => episode.aired).length > 0;
  });

  if (availableSeasons.length === 0) {
    return <></>;
  }

  const [selectedSeasonNumber, setSelectedSeasonNumber] = useState(
    availableSeasons[availableSeasons.length - 1]?.number
  );

  const seasonSelected = (value: number) => {
    setSelectedSeasonNumber(value);
  };

  const selectedSeason =
    availableSeasons.find((season) => season.number === selectedSeasonNumber) ||
    availableSeasons[availableSeasons.length - 1];

  const seasonEpisodes = seasons.find(
    (season) => season.number === selectedSeasonNumber
  )?.episodes;

  const options = availableSeasons.map(({ number }) => (
    <SeasonSelection
      key={number}
      name={`Season ${number}`}
      value={number}
      active={number === selectedSeasonNumber}
      onSelect={seasonSelected}
    />
  ));

  return (
    <div className="pt-20">
      <ul className="flex justify-center pt-4 -mx-2 overflow-auto">
        {options}
      </ul>
      <div className="container mx-auto mt-8">
        <Season tvShowId={tvShowId} season={selectedSeason} />
      </div>
    </div>
  );
};
export default Seasons;
