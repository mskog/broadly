import React from "react";

import { usePtpMovieRecommendationsQuery } from "generated/graphql";
import { LoadingFull } from "components/shared";

import List from "./List";

const PtpMovieRecommendations = (): JSX.Element => {
  const { error, data } = usePtpMovieRecommendationsQuery({
    fetchPolicy: "cache-and-network"
  });

  let mainContent;
  if (!data) {
    mainContent = <LoadingFull />;
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
