import React from "react";

import { DateTime } from "luxon";

import Item from "./Item";

import { CalendarEpisode, CalendarMovie, Movie } from "generated/graphql";

type GroupProps = {
  date: string;
  items: (
    | Pick<CalendarEpisode, "__typename" | "id" | "tmdbDetails" | "firstAired">
    | (Pick<CalendarMovie, "__typename" | "releaseDate" | "releaseType"> & {
        movie: Pick<Movie, "id" | "title" | "posterImage">;
      })
  )[];
};

const Group = ({ date, items }: GroupProps): JSX.Element => {
  const dateTime = DateTime.fromISO(date);
  const diffDays = dateTime.diff(DateTime.local(), "days").toObject();

  let formattedDate: string | null;
  if (diffDays.days && diffDays.days <= 7) {
    formattedDate = dateTime.toRelative();
  } else {
    formattedDate = dateTime.toISODate();
  }

  const components = items.map((item) => {
    return <Item item={item} />;
  });

  return (
    <>
      <div className="w-full text-center md:text-left">
        <h1 className="text-2xl underline">{formattedDate}</h1>
      </div>
      <div className="flex-wrap mt-10 -mx-3 md:flex">{components}</div>
    </>
  );
};

export default Group;
