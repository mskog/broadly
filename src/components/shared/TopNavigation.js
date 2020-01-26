import React, { useState } from "react";

import { Link } from "react-router-dom";

import NavigationLink from "./NavigationLink";

export default function Navigation(props) {
  const {
    location: { pathname }
  } = props;

  const currentNav = pathname.split("/")[1];

  const [isExpanded, toggleExpansion] = useState(false);

  const menuOpacity = isExpanded ? 0.9 : 0.5;

  return (
    <nav
      style={{ backgroundColor: `rgba(21, 26, 48, ${menuOpacity})` }}
      className="fixed z-50 flex flex-wrap items-center justify-between w-full p-6"
    >
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link to="/movies/watched">
          <span className="text-xl font-semibold tracking-tight">Broad</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-gray-200 border border-gray-400 rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow">
          <NavigationLink
            title="Movies"
            href="/movies/watched"
            active={currentNav === "movies"}
            onClick={() => toggleExpansion(!isExpanded)}
          />
          <NavigationLink
            title="TV Shows"
            href="/tv_shows/watching"
            active={currentNav === "tv_shows"}
            onClick={() => toggleExpansion(!isExpanded)}
          />
          <NavigationLink
            title="Episodes"
            href="/episodes"
            active={currentNav === "episodes"}
            onClick={() => toggleExpansion(!isExpanded)}
          />
          <NavigationLink
            title="Search"
            href="/search"
            active={currentNav === "search"}
            onClick={() => toggleExpansion(!isExpanded)}
          />
          <NavigationLink
            title="Calendar"
            href="/calendar"
            active={currentNav === "calendar"}
            onClick={() => toggleExpansion(!isExpanded)}
          />
        </div>
      </div>
    </nav>
  );
}
