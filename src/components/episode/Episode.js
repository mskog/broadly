import React from "react";
import Top from "./Top";

import { useEpisodeQuery } from "../../store/tv_shows";

export default function Episode(props) {
  const {
    match: {
      params: { id }
    }
  } = props;

  const { data } = useEpisodeQuery({ id });

  if (!data) {
    return null;
  }

  return (
    <div>
      <Top episode={data.episode} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">
          {data.episode.tmdbDetails.overview}
        </p>
      </div>
    </div>
  );
}
