import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

function icon(minimum, maximum, score) {
  if (score >= maximum) {
    return faStar;
  }
  if (score > minimum) {
    return faStarHalf;
  }
  return faStarEmpty;
}

export default function RatingStar({ minimum, maximum, score }) {
  return (
    <FontAwesomeIcon
      className="mr-1 text-yellow-600"
      icon={icon(minimum, maximum, score)}
    />
  );
}
