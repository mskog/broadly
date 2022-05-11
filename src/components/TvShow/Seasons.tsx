import React, { useState } from "react";
import sortBy from "lodash/sortBy";

import { TvShowQuery } from "generated/graphql";

import SeasonSelection from "./SeasonSelection";
import Season from "./Season";

type SeasonsProps = {
  seasons: Pick<
    TvShowQuery["tvShow"]["seasons"][0],
    "number" | "downloaded" | "watched" | "episodes"
  >[];
};

const Seasons = ({ seasons }: SeasonsProps): JSX.Element => {
  const sortedSeasons = sortBy(seasons, (season) => season.number);

  const [selectedSeason, setSelectedSeason] = useState(
    sortedSeasons[sortedSeasons.length - 1]
  );

  const seasonSelected = (value: number) => {
    const newSeason = sortedSeasons.find((season) => season.number === value);

    if (newSeason) {
      setSelectedSeason(newSeason);
    }
  };

  const seasonEpisodes = seasons.find(
    (season) => season.number === selectedSeason.number
  )?.episodes;

  const options = sortedSeasons.map(({ number }) => (
    <SeasonSelection
      key={number}
      name={`Season ${number}`}
      value={number}
      active={number === selectedSeason.number}
      onSelect={seasonSelected}
    />
  ));

  return (
    <div className="pt-20">
      <ul className="flex justify-center pt-4 -mx-2 overflow-auto">
        {options}
      </ul>
      <div className="container mx-auto mt-8">
        <Season season={selectedSeason} />
      </div>
    </div>
  );
};
export default Seasons;
