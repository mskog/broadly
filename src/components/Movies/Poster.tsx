import React from "react";

import { thumbnail } from "utilities";

import ProgressiveImage from "components/shared/ProgressiveImage";

type PosterProps = {
  src: string | undefined;
};

const Poster = ({ src }: PosterProps): JSX.Element => {
  let imageSrc;
  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <ProgressiveImage
      className="object-cover w-full h-full rounded"
      src={thumbnail(imageSrc)}
    />
  );
};

export default Poster;
