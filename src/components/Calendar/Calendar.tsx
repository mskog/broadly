import React from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loading from "components/shared/LoadingFull";

import List from "./List";
import Categories from "./Categories";

const GET_CALENDAR = gql`
  query Calendar($category: CalendarCategory) {
    calendar(category: $category) {
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

export default function Calendar(props: any) {
  const {
    match: {
      params: { category = "ALL" }
    }
  } = props;

  const { data } = useQuery(GET_CALENDAR, {
    variables: { category: category.toUpperCase() }
  });

  let mainContent;
  if (!data) {
    mainContent = <Loading />;
  } else {
    mainContent = <List items={data.calendar} />;
  }

  return (
    <div className="container max-w-5xl pt-10 mx-auto">
      <Categories category={category} />
      {mainContent}
    </div>
  );
}
