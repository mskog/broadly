import React from "react";

import { thumbnail } from "utilities";

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
      className="object-contain rounded"
      src={thumbnail(imageSrc)}
    />
  );
}
