import React from "react";

import Lazyload from "react-lazyload";

import { thumbnail } from "utilities";

type PosterProps = {
  src: string | undefined;
  placeholder?: string | undefined;
};

const Poster = ({ src, placeholder }: PosterProps): JSX.Element => {
  let imageSrc;
  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <Lazyload placeholder={<img src={placeholder} />}>
      <img
        className="object-cover w-full h-full rounded"
        src={thumbnail(imageSrc)}
      />
    </Lazyload>
  );
};

export default Poster;
