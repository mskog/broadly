import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  query Movies($category: String, $first: Int, $skip: Int, $query: String) {
    movies(first: $first, skip: $skip, category: $category, query: $query) {
      id
      tmdbId
      title
      releaseDate
      downloadAt
      runtime
      rtCriticsRating
      rtAudienceRating
      watched
      personalRating
      overview
    }
  }
`;

const GET_MOVIE = gql`
  query Movies($id: ID!) {
    movie(id: $id) {
      id
      tmdbId
      title
      releaseDate
      downloadAt
      runtime
      rtCriticsRating
      rtAudienceRating
      watched
      personalRating
      overview
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

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

const FORCE_MOVIE = gql`
  mutation ForceMovie($id: ID!) {
    forceMovieDownload(id: $id) {
      id
    }
  }
`;

const ADD_MOVIE_TO_WAITLIST = gql`
  mutation AddMovieToWaitlist($imdbId: String!) {
    addMovieToWaitlist(imdbId: $imdbId) {
      id
    }
  }
`;

const DOWNLOAD_MOVIE = gql`
  mutation DownloadMovie($imdbId: String!) {
    downloadMovie(imdbId: $imdbId) {
      id
    }
  }
`;

export const useMoviesQuery = ({ category, first, skip, query }) => {
  return useQuery(GET_MOVIES, {
    variables: { category, first, skip, query },
    fetchPolicy: "cache-and-network"
  });
};

export const useMovieQuery = ({ id }) => {
  return useQuery(GET_MOVIE, {
    variables: { id }
  });
};

export const useAddMovieToWaitlistMutation = ({ imdbId, update }) => {
  return useMutation(ADD_MOVIE_TO_WAITLIST, {
    variables: { imdbId },
    update
  });
};

export const useDownloadMovieMutation = ({ imdbId, update }) => {
  return useMutation(DOWNLOAD_MOVIE, {
    variables: { imdbId },
    update
  });
};

export const useDeleteMovieMutation = ({ id, update }) => {
  return useMutation(DELETE_MOVIE, {
    variables: { id },
    update
  });
};

export const useForceMovieMutation = ({ id, update }) => {
  return useMutation(FORCE_MOVIE, {
    variables: { id },
    update
  });
};
