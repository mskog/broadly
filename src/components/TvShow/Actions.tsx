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

export default function Actions(props: any) {
  const {
    tvShow: { id, watching, collected, waitlist, episodes, status }
  } = props;

  const [unwatchTvShow] = useUnwatchTvShowMutation({
    id,
    update: () => {}
  });

  const [watchTvShow] = useWatchTvShowMutation({
    id,
    update: () => {}
  });

  const [collectTvShow] = useCollectTvShowMutation({
    id,
    update: () => {}
  });

  const [removeFromWaitlist] = useRemoveTvShowFromWaitlistMutation({
    id,
    update: () => {}
  });

  const [sample] = useSampleTvShowMutation({
    id,
    update: () => {}
  });

  const addToWaitlist = sample;

  const hasEpisodes = episodes.length > 0;

  return (
    <>
      {status !== "ended" && !(watching || waitlist) && hasEpisodes && (
        <ActionButton title="Watch" handle={watchTvShow} />
      )}
      {!hasEpisodes && <ActionButton title="Sample" handle={sample} />}
      {watching && (
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
