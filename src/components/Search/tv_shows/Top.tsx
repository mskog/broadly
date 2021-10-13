import React from "react";

import { useTvShowPosterQuery, TvShowSearch } from "generated/graphql";

import { cdnImage } from "utilities";

import LevelItem from "components/shared/LevelItem";
import Level from "components/shared/Level";
import Ratings from "components/shared/Ratings";

function image({
  loading,
  error,
  data
}: {
  loading: boolean;
  error?: any;
  data: any;
}) {
  if (loading || error) {
    return "https://image.tmdb.org/t/p/w1280/9QYDosqR1iIJLFwgO9ZIuvJmhmt.jpg";
  }
  return data.tvShowPoster.url;
}

function backgroundStyle(url: string) {
  return {
    backgroundImage: `linear-gradient(to top, #151A30, #151A30 0%, transparent), url('${url}')`,
    backgroundSize: "cover"
  };
}

type Props = {
  tvShow: Pick<TvShowSearch, "tmdbId" | "title" | "details">;
};

// TODO: Use lazy loading and fancy placeholders
// TODO: There are more details to show if we want
export default function Top({ tvShow }: Props) {
  const { tmdbId, title, details } = tvShow;

  const { firstAired, runtime, airedEpisodes, status, rating, genres } =
    details || {};

  let url: string = "";
  if (tmdbId) {
    url = image(
      useTvShowPosterQuery({
        variables: { tmdbId }
      })
    );
  }

  return (
    <div>
      <div
        className="w-full -mb-40 h-66vh"
        style={backgroundStyle(cdnImage(url))}
      />
      <div className="container h-full max-w-2xl px-8 mx-auto">
        <div className="flex flex-col justify-end h-full pb-10">
          <h1 className="text-5xl text-center text-gray-200 md:text-left">
            {title}
            {rating && <Ratings score={rating * 10} />}
          </h1>
          <div className="capitalize md:pt-10">
            <Level>
              <LevelItem title="Status" value={status} />
              <LevelItem title="First Aired" value={firstAired} />
              <LevelItem title="Runtime" value={`${runtime}m`} />
              {airedEpisodes && (
                <LevelItem
                  title="Aired episodes"
                  value={airedEpisodes.toString()}
                />
              )}
            </Level>
          </div>
          {genres && (
            <div className="flex flex-row justify-center pt-8 space-x-1">
              {genres.map((genre: string) => {
                return (
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-300 text-gray-800">
                    {genre}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
