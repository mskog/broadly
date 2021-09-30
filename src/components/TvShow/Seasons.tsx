import React from "react";

import Season from "./Season";

type SeasonsProps = {
  seasonNumbers: number[];
  selectedSeason?: number;
  onSelect: (season: any) => void;
};

export default function Seasons({
  seasonNumbers,
  selectedSeason,
  onSelect
}: SeasonsProps) {
  const options = seasonNumbers.map((number) => (
    <Season
      key={number}
      name={`Season ${number}`}
      value={number.toString()}
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
}
