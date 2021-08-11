import React from "react";

import { capitalize } from "lodash";

import Ratings from "components/shared/Ratings";
import { formattedRuntime, releaseYear } from "utilities.ts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faQuestionCircle,
  faTv
} from "@fortawesome/free-solid-svg-icons";

export default function ResultDetails({
  rating,
  firstAired,
  runtime,
  status,
  airedEpisodes
}) {
  return (
    <div>
      <Ratings score={rating * 10} />
      <div className="grid grid-cols-2 gap-1 mt-2 text-sm font-thin md:-mx-2 md:flex">
        <div className="md:px-2">
          <FontAwesomeIcon className="mr-1" icon={faCalendar} />
          {releaseYear(firstAired)}
        </div>
        <div className="md:px-2">
          <FontAwesomeIcon className="mr-1" icon={faClock} />
          {formattedRuntime(runtime)}
        </div>
        <div className="md:px-2">
          <FontAwesomeIcon className="mr-1" icon={faTv} />
          {airedEpisodes}
        </div>
        <div className="md:px-2">
          <FontAwesomeIcon className="mr-1" icon={faQuestionCircle} />
          {capitalize(status)}
        </div>
      </div>
    </div>
  );
}
