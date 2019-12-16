import React from "react";

export default function RtRating({ rating }) {
  let formattedRating;
  if (rating) {
    formattedRating = `${rating}%`;
  } else {
    formattedRating = "?";
  }

  return <div>{formattedRating}</div>;
}
