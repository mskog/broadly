import React from "react";

function LevelItem({ title, value, children, defaultText = "?" }) {
  return (
    <div className="pt-4 text-center md:pt-0">
      <div className="text-2xl font-semibold leading-none text-gray-400">
        {children || value || defaultText}
      </div>
      <div className="text-base text-gray-500 uppercase ">{title}</div>
    </div>
  );
}

export default LevelItem;
