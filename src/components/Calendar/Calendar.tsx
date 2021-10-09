import React from "react";

import Loading from "components/shared/LoadingFull";

import { useCalendarQuery } from "generated/graphql";

import List from "./List";
import Categories from "./Categories";

const Calendar = (props: any): JSX.Element => {
  const {
    match: {
      params: { category = "ALL" }
    }
  } = props;

  const { data } = useCalendarQuery({
    variables: {
      category: category.toUpperCase()
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
