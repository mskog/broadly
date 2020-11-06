import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Movie from "./Movie";

import { Movie as MovieType } from "types";

type ListProps = {
  loadMore: () => void;
  movies: Array<MovieType>;
};

export default function List({ loadMore, movies }: ListProps) {
  const moviesList = movies.map(movie => (
    <div key={movie.id} className="px-3 mb-10 md:w-full lg:w-1/2">
      <Movie movie={movie} />
    </div>
  ));

  if (movies.length === 0)
    return <div className="text-gray-200">No results </div>;

  return (
    <div>
      <InfiniteScroll
        style={{ overflow: "visible" }}
        dataLength={moviesList.length}
        next={loadMore}
        hasMore
        loader={<h4>Loading...</h4>}
        className="flex-wrap mt-10 -mx-3 md:flex"
      >
        {moviesList}
      </InfiniteScroll>
    </div>
  );
}
