import React from "react";

import RatingStar from "./RatingStar";

export default function Ratings({ score }) {
  const formattedScore = `| ${score}%`;

  if (!score) {
    return null;
  }

  return (
    <div className="text-xs flex items-center">
      <RatingStar minimum="0" maximum="20" score={score} />
      <RatingStar minimum="20" maximum="40" score={score} />
      <RatingStar minimum="40" maximum="60" score={score} />
      <RatingStar minimum="60" maximum="80" score={score} />
      <RatingStar minimum="80" maximum="100" score={score} />
      <span className="font-bold text-lg text-yellow-600">
        {formattedScore}
      </span>
    </div>
  );
}
