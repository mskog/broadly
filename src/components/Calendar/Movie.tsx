import React from "react";
import { Link } from "react-router-dom";

import { Poster as MoviePoster } from "components/shared";

import { Movie } from "generated/graphql";

type MovieProps = {
  releaseDate: Date;
  releaseType: string;
  movie: Pick<Movie, "id" | "title" | "posterImage">;
};

const MovieComponent = ({
  releaseDate,
  releaseType,
  movie
}: MovieProps): JSX.Element => {
  const { id, posterImage, title } = movie;

  return (
    <>
      <div className="w-32 h-40 -mt-10">
        <Link to={`/movies/${id}`}>
          <MoviePoster src={posterImage} />
        </Link>
      </div>
      <div className="w-full pl-4">
        <Link to={`/movies/${id}`}>
          <h2 className="text-3xl leading-none ">{title}</h2>
          <h3 className="pt-2 text-base leading-none ">{releaseType}</h3>
        </Link>
      </div>
    </>
  );
};

export default MovieComponent;
