import React from "react";

import { useHistory } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";

import {
  useCollectTvShowMutation,
  useSampleTvShowMutation
} from "generated/graphql";

import Loading from "components/shared/LoadingFull";
import LoaderButton from "components/shared/LoaderButton";

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
        genres
      }
    }
  }
`;

type DetailsProps = {
  match: {
    params: {
      imdbId: string;
    };
  };
};

export default function Details(props: DetailsProps) {
  const {
    match: {
      params: { imdbId }
    }
  } = props;

  const history = useHistory();

  const { data } = useQuery(GET_TV_SHOW_DETAILS, {
    variables: { imdbId }
  });

  const [sampleTvShow] = useSampleTvShowMutation({
    variables: { id: imdbId },
    update: () => {
      history.goBack();
    }
  });

  const [collectTvShow] = useCollectTvShowMutation({
    variables: { id: imdbId },
    update: () => {
      history.goBack();
    }
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
            <LoaderButton
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={sampleTvShow}
            >
              Sample
            </LoaderButton>
          </div>
          <div className="w-full mx-1 my-2 md:w-6/12">
            <LoaderButton
              className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
              onClick={collectTvShow}
            >
              Collect
            </LoaderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
