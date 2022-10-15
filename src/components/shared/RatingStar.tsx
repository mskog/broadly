import React from "react";

import { StarIcon as EmptyStarIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function icon(minimum: number, maximum: number, score: number) {
  if (score >= maximum) {
    return <StarIcon className="text-yellow-400 h-4 w-4" />;
  }

  if (score > minimum) {
    return <StarIcon className="text-yellow-400 h-3 w-3" />;
  }
  return <EmptyStarIcon className="text-yellow-400 h-4 w-4" />;
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
  return icon(minimum, maximum, score);
};

export default RatingStar;
