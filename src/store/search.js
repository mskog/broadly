import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_OMNISEARCH = gql`
  query OmniSearch($query: String!) {
    omnisearch(query: $query) {
      ... on Movie {
        id
        title
        overview
        runtime
        releaseDate
        posterImage
      }
      ... on TvShow {
        id
        name
        posterImage
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
        }
      }
    }
  }
`;

const GET_MOVIE_SEARCH = gql`
  query MovieSearch($query: String!) {
    movieSearch(query: $query) {
      title
      year
      imdbId
      imdbUrl
      downloaded
      overview
      tmdbId
    }
  }
`;

const GET_MOVIE_SEARCH_RESULT = gql`
  query MovieSearchResult($imdbId: String!) {
    movieSearchResult(imdbId: $imdbId) {
      title
      year
      imdbId
      imdbUrl
      downloaded
      overview
      tmdbId
      hasKillerRelease
      hasAcceptableRelease
      bestRelease {
        codec
        container
        quality
        releaseName
        resolution
        size
        source
        downloadUrl
      }
    }
  }
`;

const GET_TV_SHOW_SEARCH = gql`
  query TvShowSearch($query: String!) {
    tvShowSearch(query: $query) {
      title
      year
      imdbId
      imdbUrl
      downloaded
      overview
      tmdbId
    }
  }
`;

const GET_TV_SHOW_SEARCH_RESULT = gql`
  query TvShowSearchResult($imdbId: String!) {
    tvShowSearchResult(imdbId: $imdbId) {
      title
      year
      imdbId
      imdbUrl
      downloaded
      overview
      tmdbId
    }
  }
`;

export const useOmnisearchQuery = ({ query }) => {
  return useQuery(GET_OMNISEARCH, {
    variables: { query },
    fetchPolicy: "no-cache"
  });
};

export const useMovieSearchQuery = ({ query }) => {
  return useQuery(GET_MOVIE_SEARCH, {
    variables: { query },
    fetchPolicy: "cache-and-network"
  });
};

export const useMovieSearchResultQuery = ({ imdbId }) => {
  return useQuery(GET_MOVIE_SEARCH_RESULT, {
    variables: { imdbId },
    fetchPolicy: "cache-and-network"
  });
};

export const useTvShowSearchQuery = ({ query }) => {
  return useQuery(GET_TV_SHOW_SEARCH, {
    variables: { query },
    fetchPolicy: "cache-and-network"
  });
};

export const useTvShowSearchResultQuery = ({ imdbId }) => {
  return useQuery(GET_TV_SHOW_SEARCH_RESULT, {
    variables: { imdbId },
    fetchPolicy: "cache-and-network"
  });
};
