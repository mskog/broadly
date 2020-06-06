import React from "react";

import Utilities from "utilities";

import ProgressiveImage from "components/shared/ProgressiveImage";

export default function Poster({ src }) {
  let imageSrc;
  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <ProgressiveImage
      className="h-40 -mt-10 rounded w-30"
      src={Utilities.thumbnail(imageSrc)}
    />
  );
}
