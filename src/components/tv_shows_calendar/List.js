import React from "react";

import { groupBy } from "lodash";
import { DateTime } from "luxon";

import { Link } from "react-router-dom";

import Poster from "./Poster";

export default function List({ tvShows }) {
  const groupedTvShows = groupBy(tvShows, tvShow =>
    DateTime.fromISO(tvShow.firstAired)
  );

  const showComponents = Object.entries(groupedTvShows).map(([date, shows]) => {
    const dateTime = DateTime.fromISO(date);
    const diffDays = dateTime.diff(DateTime.local(), "days").toObject();

    let formattedDate;
    if (diffDays.days <= 7) {
      formattedDate = dateTime.toRelative();
    } else {
      formattedDate = dateTime.toISODate();
    }

    return shows.map(tvShow => {
      return (
        <div key={tvShow.id}>
          <div className="p-4 text-center border-b-2 border-black bg-background-blue-2">
            <h2 className="text-xl font-semibold">{formattedDate}</h2>
          </div>
          <div className="mb-8">
            <Link to={`/tv_shows/${tvShow.id}`}>
              <Poster tmdbId={tvShow.tmdbDetails.id} />
            </Link>
          </div>
        </div>
      );
    });
  });

  return (
    <div className="flex flex-col items-center mt-20">{showComponents}</div>
  );
}
