import React from "react";

import {
  useUnwatchTvShowMutation,
  useWatchTvShowMutation,
  useCollectTvShowMutation
} from "store/tv_shows";

import Watch from "./Watch";
import Unwatch from "./Unwatch";
import Collect from "./Collect";

export default function Actions(props) {
  const {
    tvShow: { id, watching, collected, waitlist }
  } = props;

  const [unwatchTvShow] = useUnwatchTvShowMutation({
    id
  });

  const [watchTvShow] = useWatchTvShowMutation({
    id
  });

  const [collectTvShow] = useCollectTvShowMutation({
    id
  });

  return (
    <>
      <Watch waitlist={waitlist} watching={watching} handle={watchTvShow} />
      <Unwatch waitlist={waitlist} watching={watching} handle={unwatchTvShow} />
      <Collect
        waitlist={waitlist}
        collected={collected}
        handle={collectTvShow}
      />
    </>
  );
}
