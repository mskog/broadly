import React from "react";

import { thumbnail } from "utilities";

import ProgressiveImage from "components/shared/ProgressiveImage";

type PosterProps = {
  src?: string;
};

export default function Poster({ src }: PosterProps) {
  let imageSrc;

  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <ProgressiveImage
      className="h-40 -mt-10 rounded w-30"
      src={thumbnail(imageSrc)}
    />
  );
}
