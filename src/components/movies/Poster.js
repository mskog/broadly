import React from "react";

import { thumbnail } from "utilities";

import ProgressiveImage from "components/shared/ProgressiveImage";

// TODO: Use lazy loading and fancy placeholders
export default function Poster({ src }) {
  let imageSrc;
  if (!src) {
    imageSrc = "https://www.fillmurray.com/105/160";
  } else {
    imageSrc = src;
  }

  return (
    <ProgressiveImage
      blurhash={"LEHV6nWB2yk8pyo0adR*.7kCMdnj"}
      className="h-40 -mt-10 rounded w-30"
      src={thumbnail(imageSrc)}
    />
  );
}
