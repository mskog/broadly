import React from "react";

import { useEpisodeQuery, useEpisodeWatchedMutation } from "generated/graphql";

import { LoadingFull } from "components/shared";
import { LoaderButton } from "components/shared";

import Top from "./Top";

type EpisodeProps = {
  match: {
    params: { id: string };
  };
};

const Episode = (props: EpisodeProps): JSX.Element => {
  const {
    match: {
      params: { id }
    }
  } = props;

  const [episodeWatched] = useEpisodeWatchedMutation({
    variables: { id },
    refetchQueries: ["Episode"]
  });

  const { data } = useEpisodeQuery({
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  if (!data) {
    return <LoadingFull />;
  }

  const { episode } = data;

  let overview;
  if (episode.watched && episode.tmdbDetails) {
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
};

export default Episode;
