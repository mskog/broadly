import React from "react";
import Loading from "components/shared/LoadingFull";

import { useShowCollectionProgressQuery } from "store/tv_shows";

export default function CollectionProgress({ tvShowId }) {
  const { data } = useShowCollectionProgressQuery({ id: tvShowId });

  if (!data) {
    return <Loading />;
  }

  const seasons = data.showCollectionProgress.seasons.map((season) => {
    return <li className="text-lg">Season {season.number}</li>;
  });

  return (
    <div className="pt-20">
      <h2 className="text-3xl">Collection Progress</h2>
      <ul>{seasons}</ul>
    </div>
  );
}
