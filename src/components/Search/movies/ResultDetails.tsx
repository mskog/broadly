import React from "react";

import { Ratings } from "components/shared";
import { formattedRuntime, releaseYear } from "utilities";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";

type ResultDetailsProps = {
  rating: number;
  released: string;
  runtime: number;
};
const ResultDetails = ({
  rating,
  released,
  runtime
}: ResultDetailsProps): JSX.Element => {
  return (
    <div>
      <Ratings score={rating * 10} />

      <div className="mt-2 text-sm font-thin">
        <span className="mr-2">
          <CalendarIcon className="w-4 h-4 mr-1 inline align-text-top" />
          {releaseYear(released)}
        </span>
        <span>
          <ClockIcon className="w-4 h-4 mr-1 inline align-text-top" />
          {formattedRuntime(runtime)}
        </span>
      </div>
    </div>
  );
};

export default ResultDetails;
