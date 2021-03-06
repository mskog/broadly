import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TV_SHOWS = gql`
  query TvShows($category: String, $first: Int, $skip: Int, $query: String) {
    tvShows(category: $category, first: $first, skip: $skip, query: $query) {
      id
      name
      posterImage
      posterImageThumbnail
      backdropImage
      tmdbDetails {
        voteAverage
        firstAirDate
        id
      }
      traktDetails {
        ids {
          tmdb
        }
        runtime
      }
    }
  }
`;

const GET_TV_SHOW = gql`
  query TvShow($id: ID!) {
    tvShow(id: $id) {
      id
      name
      status
      watching
      collected
      waitlist
      posterImage
      backdropImage
      tmdbDetails {
        voteAverage
        firstAirDate
        id
      }
      traktDetails {
        overview
        ids {
          tmdb
        }
        runtime
        genres
        network
      }
      episodes {
        id
        name
        season
        episode
        stillImage
        stillImageThumbnail
        watched
        tmdbDetails {
          name
          overview
        }
      }

      newsItems {
        title
        url
        metadata {
          image
          description
        }
      }
    }
  }
`;

const GET_TV_SHOW_SUMMARY = gql`
  query TvShowSummary($imdbId: ID!) {
    tvShowSummary(imdbId: $imdbId) {
      title
      overview
      rating
      status
      rating
      firstAired
      runtime
      airedEpisodes
      genres
    }
  }
`;

const GET_EPISODE = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      season
      episode
      stillImage
      stillImageThumbnail
      watched
      watchedAt
      tmdbDetails {
        name
        overview
        firstAirDate
      }
      tvShow {
        id
        name
        traktDetails {
          runtime
        }
      }
      bestRelease {
        resolution
      }
    }
  }
`;

const GET_EPISODES = gql`
  query Episodes($first: Int, $skip: Int, $category: EpisodeCategory) {
    episodes(first: $first, skip: $skip, category: $category) {
      id
      name
      season
      episode
      stillImage
      stillImageThumbnail
      watched
      tmdbDetails {
        name
        overview
        firstAirDate
      }

      bestRelease {
        resolution
      }

      tvShow {
        id
        name
      }
    }
  }
`;

const UNWATCH_TV_SHOW = gql`
  mutation UnwatchTvShow($id: ID!) {
    unwatchTvShow(id: $id) {
      id
    }
  }
`;

const REMOVE_TV_SHOW_FROM_WAITLIST = gql`
  mutation RemoveTvShowFromWaitlist($id: ID!) {
    removeTvShowFromWaitlist(id: $id) {
      id
    }
  }
`;

const WATCH_TV_SHOW = gql`
  mutation WatchTvShow($id: ID!) {
    watchTvShow(id: $id) {
      id
    }
  }
`;

const COLLECT_TV_SHOW = gql`
  mutation CollectTvShow($id: ID!) {
    collectTvShow(id: $id) {
      id
    }
  }
`;

const SAMPLE_TV_SHOW = gql`
  mutation SampleTvShow($id: ID!) {
    sampleTvShow(id: $id) {
      id
    }
  }
`;

const EPISODE_WATCHED = gql`
  mutation EpisodeWatched($id: ID!) {
    episodeWatched(id: $id) {
      id
    }
  }
`;

export const useTvShowsQuery = ({ category, first, skip, query }) => {
  return useQuery(GET_TV_SHOWS, {
    variables: { category, first, skip, query },
    fetchPolicy: "cache-and-network"
  });
};

export const useTvShowQuery = ({ id }) => {
  return useQuery(GET_TV_SHOW, {
    variables: { id },
    fetchPolicy: "cache-and-network"
  });
};

export const useTvShowSummaryQuery = ({ imdbId }) => {
  return useQuery(GET_TV_SHOW_SUMMARY, {
    variables: { imdbId },
    fetchPolicy: "cache-first"
  });
};

export const useEpisodeQuery = ({ id }) => {
  return useQuery(GET_EPISODE, {
    fetchPolicy: "cache-and-network",
    variables: { id }
  });
};

export const useEpisodesQuery = ({ first, skip, category }) => {
  return useQuery(GET_EPISODES, {
    variables: { first, skip, category },
    fetchPolicy: "cache-and-network"
  });
};

export const useUnwatchTvShowMutation = ({ id, update }) => {
  return useMutation(UNWATCH_TV_SHOW, {
    variables: { id },
    refetchQueries: ["TvShow", "TvShows"],
    update
  });
};

export const useWatchTvShowMutation = ({ id, update }) => {
  return useMutation(WATCH_TV_SHOW, {
    variables: { id },
    refetchQueries: ["TvShow", "TvShows"],
    update
  });
};

export const useRemoveTvShowFromWaitlistMutation = ({ id, update }) => {
  return useMutation(REMOVE_TV_SHOW_FROM_WAITLIST, {
    variables: { id },
    refetchQueries: ["TvShow", "TvShows"],
    update
  });
};

export const useSampleTvShowMutation = ({ id, update }) => {
  return useMutation(SAMPLE_TV_SHOW, {
    variables: { id },
    refetchQueries: ["TvShow", "TvShows"],
    update
  });
};

export const useCollectTvShowMutation = ({ id, update }) => {
  return useMutation(COLLECT_TV_SHOW, {
    variables: { id },
    refetchQueries: ["TvShow", "TvShows"],
    update
  });
};

export const useEpisodeWatchedMutation = ({ id, update }) => {
  return useMutation(EPISODE_WATCHED, {
    variables: { id },
    refetchQueries: ["TvShow", "Episode"],
    update
  });
};
