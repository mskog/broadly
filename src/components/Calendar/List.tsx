import React from "react";

import groupBy from "lodash/groupBy";
import { DateTime } from "luxon";

import { Link } from "react-router-dom";

import { CalendarEpisode, Movie } from "generated/graphql";

import { Poster as MoviePoster } from "components/Movies";
import TvShowPoster from "./TvShowPoster";

type ListProps = {
  items: (
    | Pick<CalendarEpisode, "__typename" | "id" | "tmdbDetails" | "firstAired">
    | Pick<Movie, "__typename" | "id" | "posterImage" | "availableDate">
  )[];
};

const List = ({ items }: ListProps): JSX.Element => {
  const groupedItems = groupBy(items, (tvShow) => {
    let date;
    if (tvShow.__typename === "CalendarEpisode") {
      date = DateTime.fromISO(tvShow.firstAired);
    } else if (tvShow.__typename === "Movie") {
      date = DateTime.fromISO(tvShow.availableDate);
    }
    return date;
  });

  const showComponents = Object.entries(groupedItems).map(([date, things]) => {
    const dateTime = DateTime.fromISO(date);
    const diffDays = dateTime.diff(DateTime.local(), "days").toObject();

    let formattedDate: string | null;
    if (diffDays.days && diffDays.days <= 7) {
      formattedDate = dateTime.toRelative();
    } else {
      formattedDate = dateTime.toISODate();
    }

    return things.map((item) => {
      let component;
      if (item.__typename === "Movie") {
        component = (
          <Link to={`/movies/${item.id}`}>
            <MoviePoster src={item.posterImage} />
          </Link>
        );
      } else if (item.__typename === "CalendarEpisode") {
        component = (
          <Link to={`/tv_shows/${item.id}`}>
            {item.tmdbDetails && item.tmdbDetails.id && (
              <TvShowPoster tmdbId={item.tmdbDetails.id.toString()} />
            )}
          </Link>
        );
      }

      return (
        <div key={item.id}>
          <div className="p-4 text-center border-b-2 border-black bg-background-blue-2">
            <h2 className="text-xl font-semibold">{formattedDate}</h2>
          </div>
          <div className="mb-8">{component}</div>
        </div>
      );
    });
  });

  return (
    <div className="flex flex-col items-center mt-20">{showComponents}</div>
  );
};

export default List;
