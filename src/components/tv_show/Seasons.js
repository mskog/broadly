import React from "react";

import Season from "./Season";

export default function Seasons({
  tvShowId,
  seasonNumbers,
  selectedSeason,
  onSelect
}) {
  const options = seasonNumbers.map(number => (
    <Season
      key={number}
      tvShowId={tvShowId}
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
}
