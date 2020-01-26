import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLink({ title, href, active, onClick }) {
  const textColor = active ? "border-b-4 border-teal-500" : "";

  return (
    <Link
      className={`block mt-4 mr-4 md:${textColor} lg:inline-block lg:mt-0 hover:text-white`}
      to={href}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
