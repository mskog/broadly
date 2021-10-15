import React from "react";

import Loading from "components/shared/LoadingFull";

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
};

export default Calendar;
