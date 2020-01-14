import React from "react";

import RatingStar from "./RatingStar";

export default function Ratings({ score }) {
  if (!score) {
    return null;
  }
  const roundedScore = Math.round(score);
  const formattedScore = `| ${roundedScore}%`;

  return (
    <div className="flex items-center text-xs">
      <RatingStar minimum="0" maximum="20" score={roundedScore} />
      <RatingStar minimum="20" maximum="40" score={roundedScore} />
      <RatingStar minimum="40" maximum="60" score={roundedScore} />
      <RatingStar minimum="60" maximum="80" score={roundedScore} />
      <RatingStar minimum="80" maximum="100" score={roundedScore} />
      <span className="text-lg font-bold text-yellow-600">
        {formattedScore}
      </span>
    </div>
  );
}
