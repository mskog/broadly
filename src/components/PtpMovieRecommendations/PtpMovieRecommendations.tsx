import React from "react";

import { usePtpMovieRecommendationsQuery } from "generated/graphql";
import Loading from "components/shared/LoadingFull";

import List from "./List";

const PtpMovieRecommendations = () => {
  const { error, data } = usePtpMovieRecommendationsQuery();

  let mainContent;
  if (!data) {
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = <List movies={data.ptpMovieRecommendations} />;
  }

  return (
    <div className="container px-4 pt-20 mx-auto overflow-auto">
      <div className="mt-20">{mainContent}</div>
    </div>
  );
};

export default PtpMovieRecommendations;
