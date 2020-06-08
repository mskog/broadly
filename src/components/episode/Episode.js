import React from "react";

import { useEpisodeQuery, useEpisodeWatchedMutation } from "store/tv_shows";

import Loading from "components/shared/LoadingFull";
import LoaderButton from "components/shared/LoaderButton";

import Top from "./Top";

export default function Episode(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  const [episodeWatched] = useEpisodeWatchedMutation({
    id
  });

  const { data } = useEpisodeQuery({ id });

  if (!data) {
    return <Loading />;
  }

  const { episode } = data;

  let overview;
  if (episode.watched) {
    overview = episode.tmdbDetails.overview;
  } else {
    overview = "[ Overview hidden to prevent spoilers ]";
  }

  return (
    <div>
      <Top episode={episode} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">{overview}</p>
        {!episode.watched && (
          <div className="w-full mx-auto my-2 md:mt-8 md:w-auto">
            <LoaderButton
              type="button"
              className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
              onClick={episodeWatched}
            >
              Watched
            </LoaderButton>
          </div>
        )}
      </div>
    </div>
  );
}
