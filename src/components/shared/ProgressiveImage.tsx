import React from "react";

export default function ProgressiveImage({
  src,
  className
}: {
  src: string;
  className?: string;
}) {
  return <img alt="poster" className={className} src={src} />;
}
