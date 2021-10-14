import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

function icon(minimum: number, maximum: number, score: number) {
  if (score >= maximum) {
    return faStar;
  }
  if (score > minimum) {
    return faStarHalf;
  }
  return faStarEmpty;
}

const RatingStar = ({
  minimum,
  maximum,
  score
}: {
  minimum: number;
  maximum: number;
  score: number;
}): JSX.Element => {
  return (
    <FontAwesomeIcon
      className="mr-1 text-yellow-400"
      icon={icon(minimum, maximum, score)}
    />
  );
};

export default RatingStar;
