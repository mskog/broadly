import React from "react";

import sortBy from "lodash/sortBy";

import { useTvShowQuery } from "generated/graphql";

import Loading from "components/shared/LoadingFull";
import Top from "./Top";
import News from "./News";
import Actions from "./Actions";
import Seasons from "./Seasons";

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

  const { data } = useTvShowQuery({
    fetchPolicy: "cache-and-network",
    variables: { id }
  });

  if (!data) {
    return <Loading />;
  }

  const seasons = data.tvShow.seasons;

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
      </div>
      <div className="container mx-auto mt-8">
        <Seasons tvShowId={data.tvShow.id} seasons={seasons} />
      </div>
    </div>
  );
};

export default TvShow;
