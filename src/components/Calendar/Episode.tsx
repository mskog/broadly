import React from "react";
import { Link } from "react-router-dom";

import TvShowPoster from "./TvShowPoster";

import { CalendarEpisode } from "generated/graphql";

type EpisodeProps = {
  item: Pick<CalendarEpisode, "id" | "tmdbDetails" | "title" | "name">;
};

const MovieComponent = ({ item }: EpisodeProps): JSX.Element => {
  return (
    <>
      <div className="w-32 h-40 -mt-10">
        <Link to={`/tv_shows/${item.id}`}>
          {item.tmdbDetails && item.tmdbDetails.id && (
            <TvShowPoster tmdbId={item.tmdbDetails.id.toString()} />
          )}
        </Link>
      </div>
      <div className="w-full pl-4">
        <Link to={`/tv_shows/${item.id}`}>
          <h2 className="text-3xl leading-none ">{item.name}</h2>
          <h3>{item.title}</h3>
        </Link>
      </div>
    </>
  );
};

export default MovieComponent;
