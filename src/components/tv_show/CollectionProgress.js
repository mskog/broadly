import React from "react";
import Loading from "components/shared/LoadingFull";

import { useShowCollectionProgressQuery } from "store/tv_shows";
import CollectionSeason from "./CollectionSeason";

export default function CollectionProgress({ tvShowId }) {
  const { data } = useShowCollectionProgressQuery({ id: tvShowId });

  if (!data) {
    return <Loading />;
  }

  const seasons = data.showCollectionProgress.seasons.map((season) => {
    return <CollectionSeason className="text-lg" season={season} />;
  });

  return (
    <div className="pt-20">
      <h2 className="text-3xl">Collection Progress</h2>
      <ul className="pt-2 ">{seasons}</ul>
    </div>
  );
}
