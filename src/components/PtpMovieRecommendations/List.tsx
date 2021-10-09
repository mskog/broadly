import React from "react";
import { PtpRecommendedMovie } from "generated/graphql";

import Movie from "./Movie";

const List = ({ movies }: { movies: PtpRecommendedMovie[] }) => {
  const moviesList = movies.map((movie: any) => (
    <div key={movie.id} className="px-3 mb-10 md:w-full lg:w-1/2">
      <Movie movie={movie} />
    </div>
  ));

  if (movies.length === 0)
    return <div className="text-gray-200">No results </div>;

  return <div>{moviesList}</div>;
};

export default List;
