import React from "react";
import queryString from "query-string";

import SearchBox from "../shared/SearchBox";

import Categories from "./Categories";

import MovieResults from "./movies/Results";
import TvShowResults from "./tv_shows/Results";

export default function Search(props) {
  const {
    history,
    pathname,
    location: { search },
    match: {
      params: { category = "movies" }
    }
  } = props;

  const { query } = queryString.parse(search);

  let mainContent;
  if (query) {
    let categoryComponent;
    if (category === "movies") {
      categoryComponent = <MovieResults query={query} />;
    } else {
      categoryComponent = <TvShowResults query={query} />;
    }
    mainContent = (
      <div>
        <Categories category={category} query={query} />
        <div className="mt-20">{categoryComponent}</div>
      </div>
    );
  }

  return (
    <div className="container px-8 pt-20 mx-auto overflow-auto">
      <div className="flex justify-center">
        <SearchBox
          pathname={pathname}
          history={history}
          query={query}
          placeholder="Movie or TV Show id, url or name..."
        />
      </div>
      <div>{mainContent}</div>
    </div>
  );
}
