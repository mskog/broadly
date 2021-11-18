import React from "react";

import { LoadingFull } from "components/shared";

import { CalendarCategory, useCalendarQuery } from "generated/graphql";

import List from "./List";
import Categories from "./Categories";

type CalendarProps = {
  match: {
    params: {
      category?: string;
    };
  };
};

const Calendar = (props: CalendarProps): JSX.Element => {
  const {
    match: {
      params: { category = CalendarCategory.All }
    }
  } = props;

  const calendarCategory = category.toUpperCase() as CalendarCategory;

  const { data } = useCalendarQuery({
    variables: {
      category: calendarCategory
    },
    fetchPolicy: "cache-and-network"
  });

  let mainContent;
  if (!data) {
    mainContent = <LoadingFull />;
  } else {
    mainContent = <List items={data.calendar} />;
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10">
      <Categories category={category} />
      {mainContent}
    </div>
  );
};

export default Calendar;
