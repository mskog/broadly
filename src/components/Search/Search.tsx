import React from "react";
import queryString from "query-string";

import { RouteComponentProps } from "react-router-dom";

import { SearchBox } from "components/shared";

import Categories from "./Categories";

import MovieResults from "./movies/Results";
import TvShowResults from "./tv_shows/Results";

type SearchProps = {
  pathname: string;
  match: {
    params: { category: string };
  };
} & RouteComponentProps;

const Search = (props: SearchProps): JSX.Element => {
  const {
    history,
    pathname,
    location: { search },
    match: {
      params: { category = "movies" }
    }
  } = props;

  const { query } = queryString.parse(search);
  const parsedQuery = Array.isArray(query) ? query[0] : query || "";

  let mainContent: JSX.Element = <></>;
  if (parsedQuery) {
    let categoryComponent;
    if (category === "movies") {
      categoryComponent = <MovieResults query={parsedQuery} />;
    } else {
      categoryComponent = <TvShowResults query={parsedQuery} />;
    }
    mainContent = (
      <div>
        <Categories category={category} query={parsedQuery} />
        <div className="mt-20">{categoryComponent}</div>
      </div>
    );
  }

  return (
    <div className="container px-8 pt-32 mx-auto overflow-auto">
      <SearchBox
        pathname={pathname}
        history={history}
        query={parsedQuery}
        placeholder="Movie or TV Show id, url or name..."
      />
      <div>{mainContent}</div>
    </div>
  );
};

export default Search;
