import React from "react";

type LevelItemProps = {
  title: string;
  value?: string;
  children?: React.ReactNode;
  defaultText?: string;
  hideIfBlank?: boolean;
};

function LevelItem({
  title,
  value,
  children,
  defaultText = "?",
  hideIfBlank = false
}: LevelItemProps) {
  if (!value && hideIfBlank) {
    return <></>;
  }

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
