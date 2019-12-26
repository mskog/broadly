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
    <ul className="flex justify-start pt-20 -mx-2 overflow-auto ">{options}</ul>
  );
}
