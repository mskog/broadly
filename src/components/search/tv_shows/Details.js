import React from "react";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import {
  useCollectTvShowMutation,
  useSampleTvShowMutation
} from "store/tv_shows";

import Loading from "components/shared/LoadingFull";

import Top from "./Top";

const GET_TV_SHOW_DETAILS = gql`
  query TvShowSearchResult($imdbId: String!) {
    tvShowSearchResult(imdbId: $imdbId) {
      title
      tmdbId
      year
      overview
      details {
        firstAired
        runtime
        airedEpisodes
        status
        rating
      }
    }
  }
`;

export default function Details(props) {
  const {
    match: {
      params: { imdbId }
    }
  } = props;

  const { data } = useQuery(GET_TV_SHOW_DETAILS, {
    variables: { imdbId }
  });

  const [sampleTvShow] = useSampleTvShowMutation({
    id: imdbId
  });

  const [collectTvShow] = useCollectTvShowMutation({
    id: imdbId
  });

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="pb-20">
      <Top tvShow={data.tvShowSearchResult} />
      <div className="container max-w-2xl px-8 mx-auto">
        <p className="py-4 text-lg text-gray-400">
          {data.tvShowSearchResult.overview}
        </p>
        <div className="flex flex-col pt-4 -mx-2 md:flex-row">
          <div className="w-full mx-1 my-2 md:w-6/12">
            <button
              type="button"
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={sampleTvShow}
            >
              Sample
            </button>
          </div>
          <div className="w-full mx-1 my-2 md:w-6/12">
            <button
              type="button"
              className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
              onClick={collectTvShow}
            >
              Collect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}