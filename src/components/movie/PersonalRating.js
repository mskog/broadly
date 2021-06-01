import React, { useState } from "react";

import useOnclickOutside from "react-cool-onclickoutside";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export default function PersonalRating({ id, rating: initialRating }) {
  const ratingValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [editMode, setEditMode] = useState(false);
  const [rating, setRating] = useState(initialRating);

  const ref = useOnclickOutside(() => {
    setEditMode(false);
  });

  const RATE_MOVIE = gql`
    mutation RateMovie($id: ID!, $rating: Int!) {
      rateMovie(id: $id, rating: $rating) {
        id
      }
    }
  `;

  const [rateMovie] = useMutation(RATE_MOVIE);

  const onChange = (event) => {
    const newRating = parseInt(event.target.value, 10);
    setRating(newRating);
    setEditMode(false);
    rateMovie({ variables: { id, rating: newRating } });
  };

  let ratingDisplay;
  if (rating) {
    ratingDisplay = `${rating} / 10`;
  } else {
    ratingDisplay = "Rate";
  }

  return (
    <div>
      {editMode ? (
        <select
          ref={ref}
          className="w-auto pr-10 mt-1 text-base leading-6 border-gray-300 form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-lg sm:leading-5"
          onChange={onChange}
        >
          {ratingValues.map((ratingValue) => {
            return (
              <option selected={ratingValue === rating} value={ratingValue}>
                {ratingValue}
              </option>
            );
          })}
        </select>
      ) : (
        <span className="cursor-pointer" onClick={() => setEditMode(!editMode)}>
          {ratingDisplay}
        </span>
      )}
    </div>
  );
}
