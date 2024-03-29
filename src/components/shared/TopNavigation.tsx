import React, { useState } from "react";

import KeyboardEventHandler from "@infinium/react-keyboard-event-handler";

import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

import NavigationLink from "./NavigationLink";
import OmniSearch from "./omnisearch/OmniSearch";

type TopNavigationProps = {
  location: { pathname: string };
};

const TopNavigation = (props: TopNavigationProps): JSX.Element => {
  const {
    location: { pathname }
  } = props;

  const currentNav = pathname.split("/")[1];

  const [isExpanded, toggleExpansion] = useState(false);
  const [omnisearchOpen, toggleOmnisearch] = useState(false);

  const menuOpacity = isExpanded ? 0.9 : 0.5;

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <KeyboardEventHandler
        handleKeys={[
          "meta+p",
          "ctrl+p",
          "meta+f",
          "ctrl+f",
          "meta+k",
          "ctrl+k"
        ]}
        onKeyEvent={(key, e) => {
          e.preventDefault();
          toggleOmnisearch(!omnisearchOpen);
        }}
      />
      {omnisearchOpen && (
        <OmniSearch closeHandler={() => toggleOmnisearch(false)} />
      )}
      <nav
        style={{ backgroundColor: `rgba(21, 26, 48, ${menuOpacity})` }}
        className="fixed z-40 flex flex-wrap items-center justify-between w-full p-6"
      >
        <div className="block lg:hidden">
          <MagnifyingGlassIcon
            className="text-xl cursor-pointer h-6 w-6"
            onClick={() => toggleOmnisearch(!omnisearchOpen)}
          />
        </div>

        <div className="block lg:hidden">
          <button
            type="button"
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-gray-200 border border-gray-400 rounded hover:text-white hover:border-white focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
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
              href="/episodes/downloads"
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
              title="Best movies"
              href={`/best_movies/${currentYear}`}
              active={currentNav === "best_movies"}
              onClick={() => toggleExpansion(!isExpanded)}
            />
            <NavigationLink
              title="Movie Recommendations"
              href="/ptp_movie_recommendations"
              active={currentNav === "ptp_movie_recommendations"}
              onClick={() => toggleExpansion(!isExpanded)}
            />
            <NavigationLink
              title="Calendar"
              href="/calendar"
              active={currentNav === "calendar"}
              onClick={() => toggleExpansion(!isExpanded)}
            />
            <div className="hidden float-right mt-4 mr-4 text-right md:flex lg:mt-0">
              <span className="mr-4">
                <NavigationLink
                  title="Login"
                  href="/login"
                  active={currentNav === "login"}
                  onClick={() => toggleExpansion(!isExpanded)}
                />
              </span>
              <MagnifyingGlassIcon
                className="text-xl cursor-pointer hover:text-white h-6 w-6"
                onClick={() => toggleOmnisearch(!omnisearchOpen)}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavigation;
