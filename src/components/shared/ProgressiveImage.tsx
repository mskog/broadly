import React from "react";

const ProgressiveImage = ({
  src,
  className
}: {
  src: string;
  className?: string;
}): JSX.Element => {
  return <img alt="poster" className={className} src={src} />;
};

export default ProgressiveImage;
