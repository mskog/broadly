import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Movie from "./Movie";

export default function MoviesList({ loadMore, movies }) {
  const moviesList = movies.map(movie => (
    <div key={movie.id} className="md:w-1/2 px-3 mb-10">
      <Movie movie={movie} />
    </div>
  ));

  return (
    <div>
      <InfiniteScroll
        dataLength={moviesList.length}
        next={loadMore}
        hasMore
        loader={<h4>Loading...</h4>}
        className="md:flex -mx-3 flex-wrap mt-10"
      >
        {moviesList}
      </InfiniteScroll>
    </div>
  );
}
