import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Movie from "./Movie";

export default function MoviesList({ loadMore, movies }) {
  const moviesList = movies.map(movie => (
    <div key={movie.id} className="px-3 mb-10 md:w-full lg:w-1/2">
      <Movie movie={movie} />
    </div>
  ));

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
