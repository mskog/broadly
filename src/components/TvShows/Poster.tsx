import React from "react";

import { thumbnail } from "utilities";

import ProgressiveImage from "components/shared/ProgressiveImage";

const Poster = ({ src }: { src: string | undefined }): JSX.Element => {
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
