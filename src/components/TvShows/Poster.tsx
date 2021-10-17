import React from "react";

import { thumbnail } from "utilities";

const Poster = ({ src }: { src: string | undefined }): JSX.Element => {
  let imageSrc;
  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <img
      className="object-cover w-full h-full rounded"
      src={thumbnail(imageSrc)}
    />
  );
};

export default Poster;
