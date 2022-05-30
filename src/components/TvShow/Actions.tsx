import React from "react";

import {
  useUnwatchTvShowMutation,
  useWatchTvShowMutation,
  useCollectTvShowMutation,
  useRemoveTvShowFromWaitlistMutation,
  useSampleTvShowMutation,
  TvShow,
  Season
} from "generated/graphql";

import ActionButton from "./ActionButton";
import DangerousActionButton from "./DangerousActionButton";

type ActionsProps = {
  tvShow: Pick<
    TvShow,
    "id" | "watching" | "collected" | "waitlist" | "status"
  > & { seasons?: Pick<Season, "number">[] };
};

const Actions = (props: ActionsProps): JSX.Element => {
  const {
    tvShow: { id, watching, collected, waitlist, seasons, status }
  } = props;

  const [unwatchTvShow] = useUnwatchTvShowMutation({
    variables: {
      id: id.toString()
    },
    refetchQueries: ["TvShow"]
  });

  const [watchTvShow] = useWatchTvShowMutation({
    variables: {
      id: id.toString()
    },
    refetchQueries: ["TvShow"]
  });

  const [collectTvShow] = useCollectTvShowMutation({
    variables: {
      id: id.toString()
    },
    refetchQueries: ["TvShow"]
  });

  const [removeFromWaitlist] = useRemoveTvShowFromWaitlistMutation({
    variables: {
      id: id.toString()
    },
    refetchQueries: ["TvShow"]
  });

  const [sample] = useSampleTvShowMutation({
    variables: {
      id: id.toString()
    },
    refetchQueries: ["TvShow"]
  });

  const addToWaitlist = sample;

  const hasEpisodes = seasons ? seasons.length > 0 : false;

  return (
    <>
      {status !== "ended" && !(watching || waitlist) && hasEpisodes && (
        <ActionButton title="Watch" handle={watchTvShow} />
      )}
      {hasEpisodes && !watching && (
        <ActionButton title="Sample" handle={sample} />
      )}
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
};

export default Actions;
