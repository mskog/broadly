import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLink({
  title,
  href,
  active,
  onClick
}: {
  title: string;
  href: string;
  active: boolean;
  onClick: () => {};
}) {
  const textColor = active ? "md:border-b-4 md:border-teal-500" : "";

  return (
    <Link
      className={`block mt-4 mr-4 ${textColor} lg:inline-block lg:mt-0 hover:text-white text-gray-300`}
      to={href}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
