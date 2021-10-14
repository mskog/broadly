import React from "react";

type LevelItemProps = {
  title?: string;
  value?: string;
  children?: JSX.Element | JSX.Element[] | undefined;
  defaultText?: string;
  hideIfBlank?: boolean;
};

const LevelItem = ({
  title,
  value,
  children,
  defaultText = "?",
  hideIfBlank = false
}: LevelItemProps): JSX.Element => {
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
};

export default LevelItem;
