import React, { useState } from "react";

import uniq from "lodash/uniq";
import sortBy from "lodash/sortBy";
import last from "lodash/last";

import { useTvShowQuery, Episode } from "generated/graphql";

import Loading from "components/shared/LoadingFull";
import Top from "./Top";
import News from "./News";
import Actions from "./Actions";
import Seasons from "./Seasons";
import Episodes from "./Episodes";

type TvShowProps = {
  match: {
    params: { id: string };
  };
};

const TvShow = (props: TvShowProps): JSX.Element => {
  const {
    match: {
      params: { id }
    }
  } = props;

  const [selectedSeason, setSelectedSeason] = useState(0);

  const { data, loading } = useTvShowQuery({
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  if (!data) {
    return <Loading />;
  }

  const episodes = data.tvShow.episodes || [];

  const seasonNumbers = sortBy(
    uniq(
      episodes.map((episode: Pick<Episode, "season">) =>
        episode?.season ? episode.season : 0
      )
    )
  );

  const selectedEpisodes = episodes.filter(
    (episode: Pick<Episode, "season">) =>
      episode.season === (selectedSeason || last(seasonNumbers))
  );

  return (
    <div className="pb-20">
      <Top tvShow={data.tvShow} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">
          {data.tvShow.traktDetails?.overview}
        </p>
        <div className="flex flex-col pt-4 -mx-2 md:flex-row">
          <Actions tvShow={data.tvShow} />
        </div>

        <News newsItems={data.tvShow.newsItems || []} />

        {selectedEpisodes.length > 0 && (
          <Seasons
            seasonNumbers={seasonNumbers}
            selectedSeason={selectedSeason || last(seasonNumbers)}
            onSelect={setSelectedSeason}
          />
        )}
      </div>
      <div className="container mx-auto mt-8">
        <Episodes episodes={selectedEpisodes} />
      </div>
    </div>
  );
};

export default TvShow;
