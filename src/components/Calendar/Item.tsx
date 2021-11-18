import React from "react";
import { Link } from "react-router-dom";

import { Poster as MoviePoster } from "components/shared";
import TvShowPoster from "./TvShowPoster";

import { CalendarEpisode, Movie } from "generated/graphql";

type CalendarItemProps = {
  item:
    | CalendarEpisode
    | Pick<Movie, "__typename" | "id" | "title" | "posterImage">;
};

const Item = ({ item }: CalendarItemProps): JSX.Element => {
  let component;
  if (item.__typename === "Movie") {
    component = (
      <>
        <div className="w-32 h-40 -mt-10">
          <Link to={`/movies/${item.id}`}>
            <MoviePoster src={item.posterImage} />
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/movies/${item.id}`}>
            <h2 className="text-3xl leading-none ">{item.title}</h2>
          </Link>
        </div>
      </>
    );
  } else if (item.__typename === "CalendarEpisode") {
    component = (
      <>
        <div className="w-32 h-40 -mt-10">
          <Link to={`/tv_shows/${item.id}`}>
            {item.tmdbDetails && item.tmdbDetails.id && (
              <TvShowPoster tmdbId={item.tmdbDetails.id.toString()} />
            )}
          </Link>
        </div>
        <div className="w-full pl-4">
          <Link to={`/tv_shows/${item.id}`}>
            <h2 className="text-3xl leading-none ">{item.name}</h2>
            <h3>{item.title}</h3>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="px-3 mb-10 md:w-full lg:w-1/2 xl:w-1/3">
      <div className="text-gray-100 rounded shadow-lg shadow-fat bg-background-blue-2">
        <div className="flex p-4">{component}</div>
      </div>
    </div>
  );
};

export default Item;
