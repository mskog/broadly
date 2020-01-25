import React from "react";

import NavigationLink from "./NavigationLink";

export default function Navigation(props) {
  const {
    location: { pathname }
  } = props;

  const currentNav = pathname.split("/")[1];

  return (
    <nav
      style={{
        backgroundColor: "rgba(21, 26, 48, 0.6)"
      }}
      className="fixed z-50 flex flex-wrap items-center justify-between w-full p-8 px-8"
    >
      <div className="container m-auto">
        <div className="flex flex-grow block w-auto w-full lg:items-center">
          <div className="flex-grow text-base">
            <NavigationLink
              title="Movies"
              href="/movies/watched"
              active={currentNav === "movies"}
            />
            <NavigationLink
              title="TV Shows"
              href="/tv_shows/watching"
              active={currentNav === "tv_shows"}
            />
            <NavigationLink
              title="Episodes"
              href="/episodes"
              active={currentNav === "episodes"}
            />
            <NavigationLink
              title="Search"
              href="/search"
              active={currentNav === "search"}
            />
            <NavigationLink
              title="Calendar"
              href="/calendar"
              active={currentNav === "calendar"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
