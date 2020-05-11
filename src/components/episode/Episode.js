import React from "react";

import { useEpisodeQuery } from "store/tv_shows";

import Loading from "components/shared/LoadingFull";

import Top from "./Top";

export default function Episode(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  const { data } = useEpisodeQuery({ id });

  if (!data) {
    return <Loading />;
  }

  const { episode } = data;

  let overview;
  if (episode.watched) {
    overview = episode.tmdbDetails.overview;
  } else {
    overview = "[ Overview hidden until watched ]";
  }

  return (
    <div>
      <Top episode={episode} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">{overview}</p>
      </div>
    </div>
  );
}
