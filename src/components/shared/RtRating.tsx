import React from "react";

type RtRatingProps = {
  rating: number;
};

const RtRating = ({ rating }: RtRatingProps): JSX.Element => {
  let formattedRating;
  if (rating) {
    formattedRating = `${rating}%`;
  } else {
    formattedRating = "?";
  }

  return <div>{formattedRating}</div>;
};

export default RtRating;
