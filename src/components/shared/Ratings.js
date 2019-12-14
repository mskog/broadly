import React from "react";

import RatingStar from "./RatingStar";

export default function Ratings({ score }) {
  const formattedScore = `| ${score}%`;

  if (!score) {
    return null;
  }

  return (
    <div className="flex items-center text-xs">
      <RatingStar minimum="0" maximum="20" score={score} />
      <RatingStar minimum="20" maximum="40" score={score} />
      <RatingStar minimum="40" maximum="60" score={score} />
      <RatingStar minimum="60" maximum="80" score={score} />
      <RatingStar minimum="80" maximum="100" score={score} />
      <span className="text-lg font-bold text-yellow-600">
        {formattedScore}
      </span>
    </div>
  );
}
