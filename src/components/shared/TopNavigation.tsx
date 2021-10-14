import React, { useState } from "react";

import KeyboardEventHandler from "react-keyboard-event-handler";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

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
      <OmniSearch
        open={omnisearchOpen}
        closeHandler={() => toggleOmnisearch(false)}
      />
      <nav
        style={{ backgroundColor: `rgba(21, 26, 48, ${menuOpacity})` }}
        className="fixed z-40 flex flex-wrap items-center justify-between w-full p-6"
      >
        <div className="block lg:hidden">
          <FontAwesomeIcon
            className="text-xl cursor-pointer"
            icon={faSearch}
            onClick={() => toggleOmnisearch(!omnisearchOpen)}
          />
        </div>

        <div className="block lg:hidden">
          <button
            type="button"
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 text-gray-200 border border-gray-400 rounded hover:text-white hover:border-white focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
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
              href="/best_movies"
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
            <NavigationLink
              title="News"
              href="/news/our_tv_shows"
              active={currentNav === "news"}
              onClick={() => toggleExpansion(!isExpanded)}
            />
            <div className="hidden float-right mt-4 mr-4 text-right md:block lg:inline-block lg:mt-0 ">
              <span className="mr-4">
                <NavigationLink
                  title="Login"
                  href="/login"
                  active={currentNav === "login"}
                  onClick={() => toggleExpansion(!isExpanded)}
                />
              </span>
              <FontAwesomeIcon
                className="text-xl cursor-pointer hover:text-white"
                icon={faSearch}
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
