import { useQuery } from "@apollo/react-hooks";
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

export const useTvShowsQuery = ({ category, first, skip, query }) => {
  return useQuery(GET_TV_SHOWS, {
    variables: { category, first, skip, query }
  });
};
