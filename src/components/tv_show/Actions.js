import React from "react";

import {
  useUnwatchTvShowMutation,
  useWatchTvShowMutation
} from "../../store/tv_shows";

import Watch from "./Watch";
import Unwatch from "./Unwatch";

// Add collect and sample
export default function Actions(props) {
  const {
    tvShow: { id, watching }
  } = props;

  const [unwatchTvShow] = useUnwatchTvShowMutation({
    id
  });

  const [watchTvShow] = useWatchTvShowMutation({
    id
  });

  return (
    <>
      <Watch watching={watching} handle={watchTvShow} />
      <Unwatch watching={watching} handle={unwatchTvShow} />
    </>
  );
}
