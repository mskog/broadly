import React from "react";

function LevelItem({ title, value, children }) {
  return (
    <div className="pt-4 text-center md:pt-0">
      <div className="text-2xl leading-none text-gray-400">
        {children || value}
      </div>
      <div className="text-base text-gray-500 uppercase text-font-normal">
        {title}
      </div>
    </div>
  );
}

export default LevelItem;
