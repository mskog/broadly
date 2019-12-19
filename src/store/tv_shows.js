import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_TV_SHOWS = gql`
  query TvShows($category: String, $first: Int, $skip: Int, $query: String) {
    tvShows(category: $category, first: $first, skip: $skip, query: $query) {
      id
      name
      tmdbDetails {
        voteAverage
        firstAirDate
        id
      }
      traktDetails {
        ids {
          tmdb
        }
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

const WATCH_TV_SHOW = gql`
  mutation WatchTvShow($id: ID!) {
    watchTvShow(id: $id) {
      id
    }
  }
`;

export const useTvShowsQuery = ({ category, first, skip, query }) => {
  return useQuery(GET_TV_SHOWS, {
    variables: { category, first, skip, query }
  });
};

export const useTvShowQuery = ({ id }) => {
  return useQuery(GET_TV_SHOW, {
    variables: { id }
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
