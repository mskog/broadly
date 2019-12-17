import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import queryString from "query-string";

import Categories from "./Categories";
import List from "./List";
import Search from "./Search";

const MOVIES = gql`
  query Movies($category: String, $first: Int, $skip: Int, $query: String) {
    movies(
      first: $first
      skip: $skip
      category: $category
      filter: { query: $query }
    ) {
      id
      tmdbId
      title
      releaseDate
      downloadAt
      runtime
      rtCriticsRating
      rtAudienceRating
      watched
      personalRating
      overview
    }
  }
`;

export default function Movies(props) {
  const {
    history,
    pathname,
    match: {
      params: { category }
    },
    location: { search }
  } = props;

  const { query } = queryString.parse(search);

  const { loading, error, data, fetchMore } = useQuery(MOVIES, {
    variables: { category, first: 20, skip: 0, query },
    fetchPolicy: "cache-and-network"
  });

  const loadMore = () => {
    fetchMore({
      variables: { skip: data.movies.length },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return { ...prev, movies: [...prev.movies, ...fetchMoreResult.movies] };
      }
    });
  };

  let mainContent;
  if (loading && !data) {
    mainContent = <p>Loading...</p>;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List loadMore={loadMore} movies={data.movies} />;
  }

  return (
    <div className="container px-8 mx-auto overflow-auto">
      <Categories category={category} />
      <div className="flex justify-center">
        <Search pathname={pathname} history={history} query={query} />
      </div>
      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
