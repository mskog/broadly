import React from "react";

import {
  useUnwatchTvShowMutation,
  useWatchTvShowMutation,
  useCollectTvShowMutation,
  useRemoveTvShowFromWaitlistMutation,
  useSampleTvShowMutation,
  TvShow
} from "generated/graphql";

import ActionButton from "./ActionButton";
import DangerousActionButton from "./DangerousActionButton";

type ActionsProps = {
  tvShow: Pick<
    TvShow,
    "id" | "watching" | "collected" | "waitlist" | "status"
  > & { episodes?: any[] };
};

export default function Actions(props: ActionsProps) {
  const {
    tvShow: { id, watching, collected, waitlist, episodes, status }
  } = props;

  const [unwatchTvShow] = useUnwatchTvShowMutation({
    variables: {
      id: id.toString()
    },
    update: () => {}
  });

  const [watchTvShow] = useWatchTvShowMutation({
    variables: {
      id: id.toString()
    },
    update: () => {}
  });

  const [collectTvShow] = useCollectTvShowMutation({
    variables: {
      id: id.toString()
    },
    update: () => {}
  });

  const [removeFromWaitlist] = useRemoveTvShowFromWaitlistMutation({
    variables: {
      id: id.toString()
    },
    update: () => {}
  });

  const [sample] = useSampleTvShowMutation({
    variables: {
      id: id.toString()
    },
    update: () => {}
  });

  const addToWaitlist = sample;

  const hasEpisodes = episodes ? episodes.length > 0 : false;

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
