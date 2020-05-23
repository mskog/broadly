import React from "react";

import Image from "react-graceful-image";

import { placeholder } from "utilities";

export default function ProgressiveImage({ src, className }) {
  return (
    <Image
      className={className}
      src={src}
      customPlaceholder={ref => (
        <img
          alt="thing"
          className={className}
          src={placeholder(src)}
          ref={ref}
        />
      )}
    />
  );
}
