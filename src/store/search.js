import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
