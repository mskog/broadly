import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MOVIES = gql`
  query Movies($category: String, $first: Int, $skip: Int, $query: String) {
    movies(
      first: $first
      skip: $skip
      category: $category
      filter: { query: $query }
    ) {
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

const useMoviesQuery = ({ category, first, skip, query }) => {
  return useQuery(GET_MOVIES, {
    variables: { category, first, skip, query },
    fetchPolicy: "cache-and-network"
  });
};

const useMovieQuery = ({ id }) => {
  return useQuery(GET_MOVIE, {
    variables: { id }
  });
};

const useDeleteMovieMutation = ({ id, update }) => {
  return useMutation(DELETE_MOVIE, {
    variables: { id },
    update
  });
};

export { useMoviesQuery, useMovieQuery, useDeleteMovieMutation };
