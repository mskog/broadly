import React from "react";
import { Link } from "react-router-dom";

export default function NavigationLink({ title, href }) {
  return (
    <Link
      className="inline-block mt-0 mr-4 text-gray-200 uppercase hover:text-gray-600 hover:underline"
      to={href}
    >
      {title}
    </Link>
  );
}
