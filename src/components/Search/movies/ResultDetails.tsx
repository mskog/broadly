import React from "react";

import Ratings from "components/shared/Ratings";
import { formattedRuntime, releaseYear } from "utilities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";

type ResultDetailsProps = {
  rating: number;
  released: string;
  runtime: number;
};
export default function ResultDetails({
  rating,
  released,
  runtime
}: ResultDetailsProps) {
  return (
    <div>
      <Ratings score={rating * 10} />

      <div className="mt-2 text-sm font-thin">
        <span className="mr-2">
          <FontAwesomeIcon className="mr-1" icon={faCalendar} />
          {releaseYear(released)}
        </span>
        <span>
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          {formattedRuntime(runtime)}
        </span>
      </div>
    </div>
  );
}
