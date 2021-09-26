import React from "react";

type RtRatingProps = {
  rating: number;
};

export default function RtRating({ rating }: RtRatingProps) {
  let formattedRating;
  if (rating) {
    formattedRating = `${rating}%`;
  } else {
    formattedRating = "?";
  }

  return <div>{formattedRating}</div>;
}
