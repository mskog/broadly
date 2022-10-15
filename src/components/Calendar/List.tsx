import React from "react";

import groupBy from "lodash/groupBy";

import dayjs from "dayjs";

import { CalendarEpisode, CalendarMovie, Movie } from "generated/graphql";

import Group from "./Group";

type ListProps = {
  items: (
    | Pick<CalendarEpisode, "__typename" | "id" | "tmdbDetails" | "firstAired">
    | (Pick<CalendarMovie, "__typename" | "releaseDate" | "releaseType"> & {
        movie: Pick<Movie, "id" | "title" | "posterImage">;
      })
  )[];
};

const List = ({ items }: ListProps): JSX.Element => {
  const groupedItems = groupBy(items, (tvShow) => {
    let date;
    if (tvShow.__typename === "CalendarEpisode") {
      date = dayjs(tvShow.firstAired);
    } else if (tvShow.__typename === "CalendarMovie") {
      date = dayjs(tvShow.releaseDate);
    }
    return date;
  });

  const showComponents = Object.entries(groupedItems).map(([date, things]) => {
    return <Group date={date} items={things} />;
  });

  return <div className="pt-10">{showComponents}</div>;
};

export default List;
