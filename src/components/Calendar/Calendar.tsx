import React from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "components/shared/LoadingFull";

import List from "./List";

const GET_CALENDAR = gql`
  query Calendar {
    calendar {
      __typename
      ... on Movie {
        id
        posterImage
        title
        availableDate
      }

      ... on CalendarEpisode {
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
  }
`;

export default function Calendar() {
  const { data } = useQuery(GET_CALENDAR);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="container max-w-xl pt-10 mx-auto">
      <List items={data.calendar} />
    </div>
  );
}
