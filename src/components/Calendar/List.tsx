/* eslint-disable no-underscore-dangle */
import React from "react";

import { groupBy } from "lodash";
import { DateTime } from "luxon";

import { Link } from "react-router-dom";

import MoviePoster from "components/Movies/Poster";
import TvShowPoster from "./TvShowPoster";

export default function List({ items }: { items: Array<any> }) {
  const groupedItems = groupBy(items, (tvShow) =>
    DateTime.fromISO(tvShow.firstAired || tvShow.availableDate)
  );

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
      } else {
        component = (
          <Link to={`/tv_shows/${item.id}`}>
            <TvShowPoster tmdbId={item.tmdbDetails.id} />
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
}
