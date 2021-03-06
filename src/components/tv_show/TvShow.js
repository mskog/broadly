import React, { useState } from "react";
import { uniq, sortBy, last } from "lodash";

import { useTvShowQuery } from "store/tv_shows";

import Loading from "components/shared/LoadingFull";
import Top from "./Top";
import News from "./News";
import Actions from "./Actions";
import Seasons from "./Seasons";
import Episodes from "./Episodes";

function TvShow(props) {
  const {
    history,
    match: {
      params: { id }
    }
  } = props;

  const [selectedSeason, setSelectedSeason] = useState();

  const { data } = useTvShowQuery({ id });

  if (!data) {
    return <Loading />;
  }

  const {
    traktDetails: { overview },
    episodes
  } = data.tvShow;

  const seasonNumbers = sortBy(
    uniq(episodes.map((episode) => parseInt(episode.season, 0)))
  );

  const selectedEpisodes = episodes.filter(
    (episode) => episode.season === (selectedSeason || last(seasonNumbers))
  );

  return (
    <div className="pb-20">
      <Top tvShow={data.tvShow} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">{overview}</p>
        <div className="flex flex-col pt-4 -mx-2 md:flex-row">
          <Actions history={history} tvShow={data.tvShow} />
        </div>

        <News newsItems={data.tvShow.newsItems} />

        {selectedEpisodes.length > 0 && (
          <Seasons
            tvShowId={id}
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
}

export default TvShow;
