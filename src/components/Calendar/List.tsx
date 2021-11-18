import React from "react";

import groupBy from "lodash/groupBy";
import { DateTime } from "luxon";

import { Link } from "react-router-dom";

import { CalendarEpisode, Movie } from "generated/graphql";

import { Poster as MoviePoster } from "components/shared";
import TvShowPoster from "./TvShowPoster";

import Group from "./Group";

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
    return <Group date={date} items={things} />;
  });

  return <div className="pt-10">{showComponents}</div>;
};

export default List;
