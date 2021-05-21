import React from "react";

import { usePtpMovieRecommendationsQuery } from "store/movies";
import Loading from "components/shared/LoadingFull";

import List from "./List";

export default function PtpMovieRecommendations() {
  const { loading, error, data } = usePtpMovieRecommendationsQuery();

  let mainContent;
  if (loading && !data) {
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
}
