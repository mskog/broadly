import React from "react";

type SeasonProps = {
  name: string;
  value: number;
  active: boolean;
  onSelect: (value: number) => void;
};

const Season = ({
  name,
  value,
  active,
  onSelect
}: SeasonProps): JSX.Element => {
  let classNames =
    "px-2 text-base font-bold text-center cursor-pointer hover:text-white pb-2";

  if (active) {
    classNames += " text-white border-b-2 border-gray-600";
  } else {
    classNames += " text-blue-700";
  }

  const seasonSelected = () => {
    onSelect(value);
  };

  return (
    <li key={name} className={classNames}>
      <button
        className="focus:outline-none"
        type="button"
        role="link"
        onClick={seasonSelected}
      >
        {name}
      </button>
    </li>
  );
};

export default Season;
