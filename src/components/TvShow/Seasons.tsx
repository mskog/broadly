import React from "react";

import Season from "./Season";

type SeasonsProps = {
  seasonNumbers: number[];
  selectedSeason?: number;
  onSelect: (season: number) => void;
};

const Seasons = ({
  seasonNumbers,
  selectedSeason,
  onSelect
}: SeasonsProps): JSX.Element => {
  const options = seasonNumbers.map((number) => (
    <Season
      key={number}
      name={`Season ${number}`}
      value={number}
      active={number === selectedSeason}
      onSelect={onSelect}
    />
  ));

  return (
    <div className="pt-20">
      <h2 className="text-3xl">Episodes</h2>
      <ul className="flex justify-start pt-4 -mx-2 overflow-auto ">
        {options}
      </ul>
    </div>
  );
};
export default Seasons;
