import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import MoviesCategories from "./MoviesCategories";
import MoviesList from "./MoviesList";

const MOVIES = gql`
  query Movies($category: String, $first: Int, $skip: Int) {
    movies(first: $first, skip: $skip, category: $category) {
      id
      tmdbId
      title
      releaseDate
      runtime
      rtCriticsRating
    }
  }
`;

export default function Movies() {
  const [selectedCategory, setSelectedCategory] = useState("watched");

  const { loading, error, data, fetchMore } = useQuery(MOVIES, {
    variables: { category: selectedCategory, first: 20, skip: 0 },
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

  let mainContent = null;
  if (loading && !data) {
    mainContent = <p>Loading...</p>;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <MoviesList loadMore={loadMore} movies={data.movies} />;
  }

  return (
    <div>
      <MoviesCategories
        category={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
