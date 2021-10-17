import React from "react";

import capitalize from "lodash/capitalize";

import Ratings from "components/shared/Ratings";
import { formattedRuntime, releaseYear } from "utilities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faQuestionCircle,
  faTv
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="grid grid-cols-2 gap-1 mt-2 text-sm font-thin md:-mx-2 md:flex">
        {firstAired && (
          <div className="md:px-2">
            <FontAwesomeIcon className="mr-1" icon={faCalendar} />
            {releaseYear(firstAired)}
          </div>
        )}
        {runtime && (
          <div className="md:px-2">
            <FontAwesomeIcon className="mr-1" icon={faClock} />
            {formattedRuntime(runtime)}
          </div>
        )}
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
};

export default ResultDetails;
