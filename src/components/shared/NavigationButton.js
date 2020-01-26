import React from "react";

export default function NavigationButton({ children, active }) {
  const textColor = active ? "text-gray-200" : "text-gray-600";

  return <div className={textColor}>{children}</div>;
}
