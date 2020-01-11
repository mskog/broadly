import React from "react";
import queryString from "query-string";

import SearchBox from "../shared/SearchBox";

import Categories from "./Categories";

import MovieResults from "./movies/Results";

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
    mainContent = (
      <div>
        <Categories category={category} />
        <div className="mt-10">
          <MovieResults query={query} />
        </div>
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
          debounceTimeout={300}
          minLength={5}
        />
      </div>
      {mainContent}
    </div>
  );
}
