import React from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "components/shared/LoadingFull";

import List from "./List";

const GET_TV_SHOWS_CALENDAR = gql`
  query TvShowsCalendar {
    tvShowsCalendar {
      id
      firstAired
      season
      name
      title
      tmdbDetails {
        id
      }
    }
  }
`;

export default function TvShowsCalendar() {
  const { data } = useQuery(GET_TV_SHOWS_CALENDAR);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="container max-w-xl mx-auto md:pt-10">
      <List tvShows={data.tvShowsCalendar} />
    </div>
  );
}
