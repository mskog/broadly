import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLink({ title, href, active }) {
  const textColor = active ? "border-b-4 border-teal-500" : "";

  return (
    <Link
      className={`inline-block mt-0 mr-4 text-gray-200 ${textColor} uppercase hover:text-gray-600 hover:underline`}
      to={href}
    >
      {title}
    </Link>
  );
}
