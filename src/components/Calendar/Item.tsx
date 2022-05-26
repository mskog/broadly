import React from "react";

import MovieComponent from "./Movie";
import EpisodeComponent from "./Episode";

import { CalendarEpisode, CalendarMovie, Movie } from "generated/graphql";

type CalendarItemProps = {
  item:
    | CalendarEpisode
    | (Pick<CalendarMovie, "__typename" | "releaseDate" | "releaseType"> & {
        movie: Pick<Movie, "id" | "title" | "posterImage">;
      });
};

const Item = ({ item }: CalendarItemProps): JSX.Element => {
  let component;
  if (item.__typename === "CalendarMovie") {
    component = (
      <MovieComponent
        releaseDate={item.releaseDate}
        releaseType={item.releaseType}
        movie={item.movie}
      />
    );
  } else if (item.__typename === "CalendarEpisode") {
    component = <EpisodeComponent item={item} />;
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
