import React from "react";

import NavigationLink from "./NavigationLink";

export default function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: "rgba(21, 26, 48, 0.6)"
      }}
      className="fixed z-50 flex flex-wrap items-center justify-between w-full p-8 px-8"
    >
      <div className="flex flex-grow block w-auto w-full lg:items-center">
        <div className="flex-grow text-base">
          <NavigationLink title="Movies" href="/movies/watched" />
          <NavigationLink title="TV Shows" href="/tv_shows/watching" />
        </div>
      </div>
    </nav>
  );
}
