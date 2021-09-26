import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export enum CalendarCategory {
  All = 'ALL',
  Episodes = 'EPISODES',
  Movies = 'MOVIES'
}

export type CalendarEpisode = {
  __typename?: 'CalendarEpisode';
  firstAired?: Maybe<Scalars['ISO8601Date']>;
  id?: Maybe<Scalars['Int']>;
  ids?: Maybe<TraktIds>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  season?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tmdbDetails?: Maybe<EpisodeTmdbDetails>;
};

export type CalendarItem = CalendarEpisode | Movie;

export type Episode = {
  __typename?: 'Episode';
  bestRelease?: Maybe<EpisodeRelease>;
  downloadAt?: Maybe<Scalars['ISO8601DateTime']>;
  episode?: Maybe<Scalars['Int']>;
  firstAired?: Maybe<Scalars['ISO8601Date']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['ISO8601DateTime']>;
  season?: Maybe<Scalars['Int']>;
  stillImage?: Maybe<Scalars['String']>;
  stillImageThumbnail?: Maybe<Scalars['String']>;
  tmdbDetails?: Maybe<EpisodeTmdbDetails>;
  tvShow: TvShow;
  watched?: Maybe<Scalars['Boolean']>;
  watchedAt?: Maybe<Scalars['ISO8601DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export enum EpisodeCategory {
  /** By downloaded */
  Downloads = 'DOWNLOADS',
  /** By watched */
  Watched = 'WATCHED'
}

export type EpisodeRelease = {
  __typename?: 'EpisodeRelease';
  id: Scalars['Int'];
  resolution: Scalars['String'];
};

export type EpisodeTmdbDetails = {
  __typename?: 'EpisodeTmdbDetails';
  episodeNumber?: Maybe<Scalars['Int']>;
  firstAirDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  seasonNumber?: Maybe<Scalars['Int']>;
  stillPath?: Maybe<Scalars['String']>;
  voteAverage?: Maybe<Scalars['String']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type Movie = OmnisearchResult & {
  __typename?: 'Movie';
  availableDate?: Maybe<Scalars['ISO8601Date']>;
  backdropImage?: Maybe<Scalars['String']>;
  bestRelease?: Maybe<MovieRelease>;
  cacheKey: Scalars['String'];
  certification?: Maybe<Scalars['String']>;
  downloadAt?: Maybe<Scalars['ISO8601DateTime']>;
  genres?: Maybe<Array<Scalars['String']>>;
  hasAcceptableRelease: Scalars['Boolean'];
  hasKillerRelease: Scalars['Boolean'];
  id: Scalars['Int'];
  imdbId?: Maybe<Scalars['String']>;
  imdbUrl: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  personalRating?: Maybe<Scalars['Int']>;
  posterImage?: Maybe<Scalars['String']>;
  posterImageThumbnail?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['ISO8601Date']>;
  releases?: Maybe<Array<MovieRelease>>;
  rtAudienceRating?: Maybe<Scalars['Int']>;
  rtCriticsRating?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  tmdbId?: Maybe<Scalars['String']>;
  traktId?: Maybe<Scalars['String']>;
  traktRating?: Maybe<Scalars['Float']>;
  traktSlug?: Maybe<Scalars['String']>;
  waitlist?: Maybe<Scalars['Boolean']>;
  watched?: Maybe<Scalars['Boolean']>;
  watchedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type MovieRelease = {
  __typename?: 'MovieRelease';
  codec: Scalars['String'];
  container: Scalars['String'];
  downloadUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  quality: Scalars['String'];
  releaseName: Scalars['String'];
  resolution: Scalars['String'];
  size: Scalars['Float'];
  source: Scalars['String'];
};

export type MovieSearch = {
  __typename?: 'MovieSearch';
  bestRelease?: Maybe<MovieRelease>;
  downloaded: Scalars['Boolean'];
  existingMovieId?: Maybe<Scalars['Int']>;
  hasAcceptableRelease: Scalars['Boolean'];
  hasKillerRelease: Scalars['Boolean'];
  imdbId?: Maybe<Scalars['String']>;
  imdbUrl?: Maybe<Scalars['String']>;
  onWaitlist: Scalars['Boolean'];
  overview?: Maybe<Scalars['String']>;
  releases?: Maybe<Array<MovieRelease>>;
  title?: Maybe<Scalars['String']>;
  tmdbId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieSummary = {
  __typename?: 'MovieSummary';
  overview?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['ISO8601Date']>;
  runtime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMovieToWaitlist: Movie;
  collectTvShow: TvShow;
  deleteMovie: Movie;
  downloadMovie: Movie;
  episodeWatched: Episode;
  forceMovieDownload: Movie;
  rateMovie: Movie;
  removeTvShowFromWaitlist: TvShow;
  sampleTvShow: TvShow;
  unwatchTvShow: TvShow;
  watchTvShow: TvShow;
};


export type MutationAddMovieToWaitlistArgs = {
  imdbId: Scalars['String'];
};


export type MutationCollectTvShowArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['Int'];
};


export type MutationDownloadMovieArgs = {
  imdbId: Scalars['String'];
};


export type MutationEpisodeWatchedArgs = {
  id: Scalars['ID'];
};


export type MutationForceMovieDownloadArgs = {
  id: Scalars['Int'];
};


export type MutationRateMovieArgs = {
  id: Scalars['ID'];
  rating: Scalars['Int'];
};


export type MutationRemoveTvShowFromWaitlistArgs = {
  id: Scalars['ID'];
};


export type MutationSampleTvShowArgs = {
  id: Scalars['ID'];
};


export type MutationUnwatchTvShowArgs = {
  id: Scalars['ID'];
};


export type MutationWatchTvShowArgs = {
  id: Scalars['ID'];
};

export type NewsItem = {
  __typename?: 'NewsItem';
  id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<NewsItemMetadata>;
  newsworthy?: Maybe<Newsworthy>;
  score?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type NewsItemMetadata = {
  __typename?: 'NewsItemMetadata';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Newsworthy = Movie | TvShow;

export type OmnisearchResult = {
  title?: Maybe<Scalars['String']>;
};

export type PtpRecommendedMovie = {
  __typename?: 'PtpRecommendedMovie';
  cover?: Maybe<Scalars['String']>;
  imdbId?: Maybe<Scalars['String']>;
  imdbRating?: Maybe<Scalars['Float']>;
  mcUrl?: Maybe<Scalars['String']>;
  ptpRating?: Maybe<Scalars['Int']>;
  synopsis?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  youtubeId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Returns a list of the best watched movies given a year */
  bestMovies: Array<Movie>;
  /** Calendar of TV Show and Movie releases */
  calendar: Array<CalendarItem>;
  /** Returns a single tv show */
  episode: Episode;
  /** Returns a list of Episode */
  episodes: Array<Episode>;
  /** Returns a single movie */
  movie: Movie;
  /** Searches for a movie */
  movieSearch: Array<MovieSearch>;
  /** Gets the detailed search result for a movie */
  movieSearchResult: MovieSearch;
  /** Returns a Trakt summary for a movie based on IMDB id */
  movieSummary: MovieSummary;
  /** Returns a list of Movies */
  movies: Array<Movie>;
  news: Array<NewsItem>;
  /** Search for any content */
  omnisearch: Array<OmnisearchResult>;
  ptpMovieRecommendations: Array<PtpRecommendedMovie>;
  /** Returns a single tv show */
  tvShow: TvShow;
  /** Gets the summary details for a tv show */
  tvShowDetails: TvShowDetails;
  /** Returns a poster for a tv show */
  tvShowPoster: TvShowPoster;
  /** Searches for a tv show */
  tvShowSearch: Array<TvShowSearch>;
  /** Gets the detailed search result for a tv show */
  tvShowSearchResult: TvShowSearch;
  /** Returns a Trakt summary for a tv show based on IMDB id */
  tvShowSummary: TvShowSummary;
  /** Returns a list of TV Shows */
  tvShows: Array<TvShow>;
  /** Calendar of TV Show releases */
  tvShowsCalendar: Array<CalendarEpisode>;
};


export type QueryBestMoviesArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};


export type QueryCalendarArgs = {
  category?: Maybe<CalendarCategory>;
};


export type QueryEpisodeArgs = {
  id: Scalars['ID'];
};


export type QueryEpisodesArgs = {
  category?: Maybe<EpisodeCategory>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryMovieSearchArgs = {
  query: Scalars['String'];
};


export type QueryMovieSearchResultArgs = {
  imdbId: Scalars['String'];
};


export type QueryMovieSummaryArgs = {
  imdbId: Scalars['ID'];
};


export type QueryMoviesArgs = {
  category?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryNewsArgs = {
  category: Scalars['String'];
};


export type QueryOmnisearchArgs = {
  query: Scalars['String'];
};


export type QueryTvShowArgs = {
  id: Scalars['ID'];
};


export type QueryTvShowDetailsArgs = {
  imdbId: Scalars['String'];
};


export type QueryTvShowPosterArgs = {
  tmdbId: Scalars['ID'];
};


export type QueryTvShowSearchArgs = {
  query: Scalars['String'];
};


export type QueryTvShowSearchResultArgs = {
  imdbId: Scalars['String'];
};


export type QueryTvShowSummaryArgs = {
  imdbId: Scalars['ID'];
};


export type QueryTvShowsArgs = {
  category?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TraktDetails = {
  __typename?: 'TraktDetails';
  genres?: Maybe<Array<Scalars['String']>>;
  ids?: Maybe<TraktIds>;
  network?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type TraktIds = {
  __typename?: 'TraktIds';
  imdb?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tmdb?: Maybe<Scalars['String']>;
  trakt?: Maybe<Scalars['Int']>;
  tvdb?: Maybe<Scalars['String']>;
  tvrage?: Maybe<Scalars['String']>;
};

export type TvShow = OmnisearchResult & {
  __typename?: 'TvShow';
  backdropImage?: Maybe<Scalars['String']>;
  collected?: Maybe<Scalars['Boolean']>;
  episodes?: Maybe<Array<Episode>>;
  id: Scalars['Int'];
  imdbId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  newsItems?: Maybe<Array<NewsItem>>;
  posterImage?: Maybe<Scalars['String']>;
  posterImageThumbnail?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tmdbDetails?: Maybe<TvShowTmdbDetails>;
  tmdbId?: Maybe<Scalars['String']>;
  traktDetails?: Maybe<TraktDetails>;
  waitlist?: Maybe<Scalars['Boolean']>;
  watching?: Maybe<Scalars['Boolean']>;
};

export type TvShowDetails = {
  __typename?: 'TvShowDetails';
  airedEpisodes?: Maybe<Scalars['Int']>;
  certification?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  firstAired?: Maybe<Scalars['ISO8601Date']>;
  genres?: Maybe<Array<Scalars['String']>>;
  homepage?: Maybe<Scalars['String']>;
  ids?: Maybe<TraktIds>;
  network?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type TvShowPoster = {
  __typename?: 'TvShowPoster';
  url: Scalars['String'];
};

export type TvShowSearch = {
  __typename?: 'TvShowSearch';
  details?: Maybe<TvShowDetails>;
  existingTvShowId?: Maybe<Scalars['Int']>;
  exists?: Maybe<Scalars['Boolean']>;
  imdbId?: Maybe<Scalars['String']>;
  imdbUrl?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  tmdbId?: Maybe<Scalars['String']>;
  tvdbId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type TvShowSummary = {
  __typename?: 'TvShowSummary';
  airedEpisodes?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  firstAired?: Maybe<Scalars['ISO8601Date']>;
  genres?: Maybe<Array<Scalars['String']>>;
  network?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type TvShowTmdbDetails = {
  __typename?: 'TvShowTmdbDetails';
  backdropPath?: Maybe<Scalars['String']>;
  firstAirDate?: Maybe<Scalars['String']>;
  genreIds?: Maybe<Array<Scalars['Int']>>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  originCountry?: Maybe<Array<Scalars['String']>>;
  originalLanguage?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['String']>;
  posterPath?: Maybe<Scalars['String']>;
  voteAverage?: Maybe<Scalars['String']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type MoviesQueryVariables = Exact<{
  category?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, tmdbId?: Maybe<string>, title: string, releaseDate?: Maybe<any>, downloadAt?: Maybe<any>, watchedAt?: Maybe<any>, runtime?: Maybe<number>, rtCriticsRating?: Maybe<number>, rtAudienceRating?: Maybe<number>, watched?: Maybe<boolean>, personalRating?: Maybe<number>, overview?: Maybe<string>, backdropImage?: Maybe<string>, posterImage?: Maybe<string>, posterImageThumbnail?: Maybe<string>, bestRelease?: Maybe<{ __typename?: 'MovieRelease', id: number, resolution: string }> }> };

export type BestMoviesQueryVariables = Exact<{
  year?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type BestMoviesQuery = { __typename?: 'Query', bestMovies: Array<{ __typename?: 'Movie', id: number, tmdbId?: Maybe<string>, title: string, releaseDate?: Maybe<any>, downloadAt?: Maybe<any>, watchedAt?: Maybe<any>, runtime?: Maybe<number>, rtCriticsRating?: Maybe<number>, rtAudienceRating?: Maybe<number>, watched?: Maybe<boolean>, personalRating?: Maybe<number>, overview?: Maybe<string>, backdropImage?: Maybe<string>, posterImage?: Maybe<string>, posterImageThumbnail?: Maybe<string> }> };

export type MovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, tmdbId?: Maybe<string>, title: string, releaseDate?: Maybe<any>, availableDate?: Maybe<any>, downloadAt?: Maybe<any>, runtime?: Maybe<number>, rtCriticsRating?: Maybe<number>, rtAudienceRating?: Maybe<number>, watched?: Maybe<boolean>, waitlist?: Maybe<boolean>, personalRating?: Maybe<number>, overview?: Maybe<string>, hasKillerRelease: boolean, hasAcceptableRelease: boolean, backdropImage?: Maybe<string>, posterImage?: Maybe<string>, posterImageThumbnail?: Maybe<string>, bestRelease?: Maybe<{ __typename?: 'MovieRelease', id: number, codec: string, container: string, quality: string, releaseName: string, resolution: string, size: number, source: string, downloadUrl?: Maybe<string> }> } };

export type MovieSummaryQueryVariables = Exact<{
  imdbId: Scalars['ID'];
}>;


export type MovieSummaryQuery = { __typename?: 'Query', movieSummary: { __typename?: 'MovieSummary', title?: Maybe<string>, overview?: Maybe<string>, rating?: Maybe<string>, status?: Maybe<string>, runtime?: Maybe<number>, released?: Maybe<any> } };

export type PtpMovieRecommendationsQueryVariables = Exact<{ [key: string]: never; }>;


export type PtpMovieRecommendationsQuery = { __typename?: 'Query', ptpMovieRecommendations: Array<{ __typename?: 'PtpRecommendedMovie', title?: Maybe<string>, ptpRating?: Maybe<number>, imdbRating?: Maybe<number>, mcUrl?: Maybe<string>, imdbId?: Maybe<string>, synopsis?: Maybe<string>, cover?: Maybe<string>, year?: Maybe<number> }> };

export type DeleteMovieMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteMovieMutation = { __typename?: 'Mutation', deleteMovie: { __typename?: 'Movie', id: number } };

export type ForceMovieMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ForceMovieMutation = { __typename?: 'Mutation', forceMovieDownload: { __typename?: 'Movie', id: number } };

export type AddMovieToWaitlistMutationVariables = Exact<{
  imdbId: Scalars['String'];
}>;


export type AddMovieToWaitlistMutation = { __typename?: 'Mutation', addMovieToWaitlist: { __typename?: 'Movie', id: number } };

export type DownloadMovieMutationVariables = Exact<{
  imdbId: Scalars['String'];
}>;


export type DownloadMovieMutation = { __typename?: 'Mutation', downloadMovie: { __typename?: 'Movie', id: number } };


export const MoviesDocument = gql`
    query Movies($category: String, $first: Int, $skip: Int, $query: String) {
  movies(first: $first, skip: $skip, category: $category, query: $query) {
    id
    tmdbId
    title
    releaseDate
    downloadAt
    watchedAt
    runtime
    rtCriticsRating
    rtAudienceRating
    watched
    personalRating
    overview
    backdropImage
    posterImage
    posterImageThumbnail
    bestRelease {
      id
      resolution
    }
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *      category: // value for 'category'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
      }
export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
        }
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;
export const BestMoviesDocument = gql`
    query BestMovies($year: Int, $first: Int, $skip: Int) {
  bestMovies(year: $year, first: $first, skip: $skip) {
    id
    tmdbId
    title
    releaseDate
    downloadAt
    watchedAt
    runtime
    rtCriticsRating
    rtAudienceRating
    watched
    personalRating
    overview
    backdropImage
    posterImage
    posterImageThumbnail
  }
}
    `;

/**
 * __useBestMoviesQuery__
 *
 * To run a query within a React component, call `useBestMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestMoviesQuery({
 *   variables: {
 *      year: // value for 'year'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useBestMoviesQuery(baseOptions?: Apollo.QueryHookOptions<BestMoviesQuery, BestMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BestMoviesQuery, BestMoviesQueryVariables>(BestMoviesDocument, options);
      }
export function useBestMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BestMoviesQuery, BestMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BestMoviesQuery, BestMoviesQueryVariables>(BestMoviesDocument, options);
        }
export type BestMoviesQueryHookResult = ReturnType<typeof useBestMoviesQuery>;
export type BestMoviesLazyQueryHookResult = ReturnType<typeof useBestMoviesLazyQuery>;
export type BestMoviesQueryResult = Apollo.QueryResult<BestMoviesQuery, BestMoviesQueryVariables>;
export const MovieDocument = gql`
    query Movie($id: ID!) {
  movie(id: $id) {
    id
    tmdbId
    title
    releaseDate
    availableDate
    downloadAt
    runtime
    rtCriticsRating
    rtAudienceRating
    watched
    waitlist
    personalRating
    overview
    hasKillerRelease
    hasAcceptableRelease
    backdropImage
    posterImage
    posterImageThumbnail
    bestRelease {
      id
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

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MovieSummaryDocument = gql`
    query MovieSummary($imdbId: ID!) {
  movieSummary(imdbId: $imdbId) {
    title
    overview
    rating
    status
    runtime
    released
  }
}
    `;

/**
 * __useMovieSummaryQuery__
 *
 * To run a query within a React component, call `useMovieSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieSummaryQuery({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useMovieSummaryQuery(baseOptions: Apollo.QueryHookOptions<MovieSummaryQuery, MovieSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieSummaryQuery, MovieSummaryQueryVariables>(MovieSummaryDocument, options);
      }
export function useMovieSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieSummaryQuery, MovieSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieSummaryQuery, MovieSummaryQueryVariables>(MovieSummaryDocument, options);
        }
export type MovieSummaryQueryHookResult = ReturnType<typeof useMovieSummaryQuery>;
export type MovieSummaryLazyQueryHookResult = ReturnType<typeof useMovieSummaryLazyQuery>;
export type MovieSummaryQueryResult = Apollo.QueryResult<MovieSummaryQuery, MovieSummaryQueryVariables>;
export const PtpMovieRecommendationsDocument = gql`
    query PtpMovieRecommendations {
  ptpMovieRecommendations {
    title
    ptpRating
    imdbRating
    mcUrl
    imdbId
    synopsis
    cover
    year
  }
}
    `;

/**
 * __usePtpMovieRecommendationsQuery__
 *
 * To run a query within a React component, call `usePtpMovieRecommendationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePtpMovieRecommendationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePtpMovieRecommendationsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePtpMovieRecommendationsQuery(baseOptions?: Apollo.QueryHookOptions<PtpMovieRecommendationsQuery, PtpMovieRecommendationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PtpMovieRecommendationsQuery, PtpMovieRecommendationsQueryVariables>(PtpMovieRecommendationsDocument, options);
      }
export function usePtpMovieRecommendationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PtpMovieRecommendationsQuery, PtpMovieRecommendationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PtpMovieRecommendationsQuery, PtpMovieRecommendationsQueryVariables>(PtpMovieRecommendationsDocument, options);
        }
export type PtpMovieRecommendationsQueryHookResult = ReturnType<typeof usePtpMovieRecommendationsQuery>;
export type PtpMovieRecommendationsLazyQueryHookResult = ReturnType<typeof usePtpMovieRecommendationsLazyQuery>;
export type PtpMovieRecommendationsQueryResult = Apollo.QueryResult<PtpMovieRecommendationsQuery, PtpMovieRecommendationsQueryVariables>;
export const DeleteMovieDocument = gql`
    mutation DeleteMovie($id: Int!) {
  deleteMovie(id: $id) {
    id
  }
}
    `;
export type DeleteMovieMutationFn = Apollo.MutationFunction<DeleteMovieMutation, DeleteMovieMutationVariables>;

/**
 * __useDeleteMovieMutation__
 *
 * To run a mutation, you first call `useDeleteMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieMutation, { data, loading, error }] = useDeleteMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMovieMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieMutation, DeleteMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMovieMutation, DeleteMovieMutationVariables>(DeleteMovieDocument, options);
      }
export type DeleteMovieMutationHookResult = ReturnType<typeof useDeleteMovieMutation>;
export type DeleteMovieMutationResult = Apollo.MutationResult<DeleteMovieMutation>;
export type DeleteMovieMutationOptions = Apollo.BaseMutationOptions<DeleteMovieMutation, DeleteMovieMutationVariables>;
export const ForceMovieDocument = gql`
    mutation ForceMovie($id: Int!) {
  forceMovieDownload(id: $id) {
    id
  }
}
    `;
export type ForceMovieMutationFn = Apollo.MutationFunction<ForceMovieMutation, ForceMovieMutationVariables>;

/**
 * __useForceMovieMutation__
 *
 * To run a mutation, you first call `useForceMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForceMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forceMovieMutation, { data, loading, error }] = useForceMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useForceMovieMutation(baseOptions?: Apollo.MutationHookOptions<ForceMovieMutation, ForceMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForceMovieMutation, ForceMovieMutationVariables>(ForceMovieDocument, options);
      }
export type ForceMovieMutationHookResult = ReturnType<typeof useForceMovieMutation>;
export type ForceMovieMutationResult = Apollo.MutationResult<ForceMovieMutation>;
export type ForceMovieMutationOptions = Apollo.BaseMutationOptions<ForceMovieMutation, ForceMovieMutationVariables>;
export const AddMovieToWaitlistDocument = gql`
    mutation AddMovieToWaitlist($imdbId: String!) {
  addMovieToWaitlist(imdbId: $imdbId) {
    id
  }
}
    `;
export type AddMovieToWaitlistMutationFn = Apollo.MutationFunction<AddMovieToWaitlistMutation, AddMovieToWaitlistMutationVariables>;

/**
 * __useAddMovieToWaitlistMutation__
 *
 * To run a mutation, you first call `useAddMovieToWaitlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMovieToWaitlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMovieToWaitlistMutation, { data, loading, error }] = useAddMovieToWaitlistMutation({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useAddMovieToWaitlistMutation(baseOptions?: Apollo.MutationHookOptions<AddMovieToWaitlistMutation, AddMovieToWaitlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMovieToWaitlistMutation, AddMovieToWaitlistMutationVariables>(AddMovieToWaitlistDocument, options);
      }
export type AddMovieToWaitlistMutationHookResult = ReturnType<typeof useAddMovieToWaitlistMutation>;
export type AddMovieToWaitlistMutationResult = Apollo.MutationResult<AddMovieToWaitlistMutation>;
export type AddMovieToWaitlistMutationOptions = Apollo.BaseMutationOptions<AddMovieToWaitlistMutation, AddMovieToWaitlistMutationVariables>;
export const DownloadMovieDocument = gql`
    mutation DownloadMovie($imdbId: String!) {
  downloadMovie(imdbId: $imdbId) {
    id
  }
}
    `;
export type DownloadMovieMutationFn = Apollo.MutationFunction<DownloadMovieMutation, DownloadMovieMutationVariables>;

/**
 * __useDownloadMovieMutation__
 *
 * To run a mutation, you first call `useDownloadMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDownloadMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [downloadMovieMutation, { data, loading, error }] = useDownloadMovieMutation({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useDownloadMovieMutation(baseOptions?: Apollo.MutationHookOptions<DownloadMovieMutation, DownloadMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DownloadMovieMutation, DownloadMovieMutationVariables>(DownloadMovieDocument, options);
      }
export type DownloadMovieMutationHookResult = ReturnType<typeof useDownloadMovieMutation>;
export type DownloadMovieMutationResult = Apollo.MutationResult<DownloadMovieMutation>;
export type DownloadMovieMutationOptions = Apollo.BaseMutationOptions<DownloadMovieMutation, DownloadMovieMutationVariables>;