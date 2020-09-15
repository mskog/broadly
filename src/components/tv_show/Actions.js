import React from "react";

import {
  useUnwatchTvShowMutation,
  useWatchTvShowMutation,
  useCollectTvShowMutation,
  useRemoveTvShowFromWaitlistMutation,
  useSampleTvShowMutation
} from "store/tv_shows";

import ActionButton from "./ActionButton";
import DangerousActionButton from "./DangerousActionButton";

export default function Actions(props) {
  const {
    tvShow: { id, watching, collected, waitlist, episodes, status }
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

  const [removeFromWaitlist] = useRemoveTvShowFromWaitlistMutation({
    id
  });

  const [sample] = useSampleTvShowMutation({
    id
  });

  const addToWaitlist = sample;

  const hasEpisodes = episodes.length > 0;

  return (
    <>
      {!status === "ended" && !(watching || waitlist) && hasEpisodes && (
        <ActionButton title="Watch" handle={watchTvShow} />
      )}
      {hasEpisodes && <ActionButton title="Sample" handle={sample} />}
      {!status === "ended" && watching && (
        <DangerousActionButton title="Unwatch" handle={unwatchTvShow} />
      )}
      {hasEpisodes && !collected && !waitlist && (
        <ActionButton title="Collect" handle={collectTvShow} />
      )}
      {waitlist && (
        <DangerousActionButton
          title="Remove from waitlist"
          handle={removeFromWaitlist}
        />
      )}
      {!waitlist && !hasEpisodes && (
        <ActionButton title="Add to waitlist" handle={addToWaitlist} />
      )}
    </>
  );
}
