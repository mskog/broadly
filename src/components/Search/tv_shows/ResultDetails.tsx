import React from "react";

import capitalize from "lodash/capitalize";

import { Ratings } from "components/shared";
import { formattedRuntime, releaseYear } from "utilities";

import {
  CalendarIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  TvIcon
} from "@heroicons/react/24/solid";

type ResultDetailsProps = {
  rating?: string;
  firstAired?: string;
  runtime?: number;
  status?: string;
  airedEpisodes?: number;
};

const ResultDetails = ({
  rating,
  firstAired,
  runtime,
  status,
  airedEpisodes
}: ResultDetailsProps): JSX.Element => {
  return (
    <div>
      {rating && <Ratings score={parseInt(rating, 10) * 10} />}
      <div className="grid grid-cols-2 gap-1 mt-2 text-sm font-thin md:flex space-x-1">
        {firstAired && (
          <div>
            <CalendarIcon className="w-4 h-4 mr-1 inline align-text-top" />
            {releaseYear(firstAired)}
          </div>
        )}
        {runtime && (
          <div>
            <ClockIcon className="w-4 h-4 mr-1 inline align-text-top" />
            {formattedRuntime(runtime)}
          </div>
        )}
        <div>
          <TvIcon className="w-4 h-4 mr-1 inline align-text-top" />
          {airedEpisodes}
        </div>
        <div>
          <QuestionMarkCircleIcon className="w-4 h-4 mr-1 inline align-text-top" />
          {capitalize(status)}
        </div>
      </div>
    </div>
  );
};

export default ResultDetails;
