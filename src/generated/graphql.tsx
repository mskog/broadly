import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
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
  id: Scalars['Int'];
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
  stillImageBase64?: Maybe<Scalars['String']>;
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
  backdropImageBase64?: Maybe<Scalars['String']>;
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
  posterImageBase64?: Maybe<Scalars['String']>;
  posterImageThumbnail?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['ISO8601Date']>;
  releases?: Maybe<Array<MovieRelease>>;
  rtAudienceRating?: Maybe<Scalars['Int']>;
  rtCriticsRating?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tmdbId?: Maybe<Scalars['String']>;
  traktId?: Maybe<Scalars['String']>;
  traktRating?: Maybe<Scalars['Float']>;
  traktSlug?: Maybe<Scalars['String']>;
  waitlist?: Maybe<Scalars['Boolean']>;
  watched?: Maybe<Scalars['Boolean']>;
  watchedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

export type MoviePoster = {
  __typename?: 'MoviePoster';
  url: Scalars['String'];
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
  imdbId: Scalars['String'];
  imdbUrl?: Maybe<Scalars['String']>;
  onWaitlist: Scalars['Boolean'];
  overview?: Maybe<Scalars['String']>;
  releases?: Maybe<Array<MovieRelease>>;
  title: Scalars['String'];
  tmdbId: Scalars['String'];
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
  id: Scalars['Int'];
  metadata?: Maybe<NewsItemMetadata>;
  newsworthy?: Maybe<Newsworthy>;
  score: Scalars['Int'];
  title: Scalars['String'];
  url: Scalars['String'];
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
  /** Returns a poster for a movie */
  moviePoster: MoviePoster;
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


export type QueryMoviePosterArgs = {
  tmdbId: Scalars['ID'];
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
  backdropImageBase64?: Maybe<Scalars['String']>;
  collected?: Maybe<Scalars['Boolean']>;
  episodes: Array<Episode>;
  id: Scalars['Int'];
  imdbId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  newsItems: Array<NewsItem>;
  posterImage?: Maybe<Scalars['String']>;
  posterImageBase64?: Maybe<Scalars['String']>;
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
  title: Scalars['String'];
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

export type CalendarQueryVariables = Exact<{
  category?: InputMaybe<CalendarCategory>;
}>;


export type CalendarQuery = { __typename?: 'Query', calendar: Array<{ __typename: 'CalendarEpisode', id: number, firstAired?: any, season?: number, name?: string, title?: string, tmdbDetails?: { __typename?: 'EpisodeTmdbDetails', id?: number } } | { __typename: 'Movie', id: number, posterImage?: string, title?: string, availableDate?: any }> };

export type MoviesQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, tmdbId?: string, title?: string, releaseDate?: any, downloadAt?: any, watchedAt?: any, runtime?: number, rtCriticsRating?: number, rtAudienceRating?: number, watched?: boolean, personalRating?: number, posterImage?: string, posterImageThumbnail?: string, posterImageBase64?: string, bestRelease?: { __typename?: 'MovieRelease', id: number, resolution: string } }> };

export type BestMoviesQueryVariables = Exact<{
  year?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type BestMoviesQuery = { __typename?: 'Query', bestMovies: Array<{ __typename?: 'Movie', id: number, tmdbId?: string, title?: string, releaseDate?: any, downloadAt?: any, watchedAt?: any, runtime?: number, rtCriticsRating?: number, rtAudienceRating?: number, watched?: boolean, personalRating?: number, overview?: string, backdropImage?: string, posterImage?: string, posterImageThumbnail?: string }> };

export type MovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, tmdbId?: string, imdbId?: string, title?: string, releaseDate?: any, availableDate?: any, downloadAt?: any, runtime?: number, rtCriticsRating?: number, rtAudienceRating?: number, watched?: boolean, waitlist?: boolean, personalRating?: number, overview?: string, hasKillerRelease: boolean, hasAcceptableRelease: boolean, backdropImage?: string, backdropImageBase64?: string, posterImage?: string, posterImageThumbnail?: string, bestRelease?: { __typename?: 'MovieRelease', id: number, codec: string, container: string, quality: string, releaseName: string, resolution: string, size: number, source: string, downloadUrl?: string } } };

export type MovieSummaryQueryVariables = Exact<{
  imdbId: Scalars['ID'];
}>;


export type MovieSummaryQuery = { __typename?: 'Query', movieSummary: { __typename?: 'MovieSummary', title?: string, overview?: string, rating?: string, status?: string, runtime?: number, released?: any } };

export type PtpMovieRecommendationsQueryVariables = Exact<{ [key: string]: never; }>;


export type PtpMovieRecommendationsQuery = { __typename?: 'Query', ptpMovieRecommendations: Array<{ __typename?: 'PtpRecommendedMovie', title?: string, ptpRating?: number, imdbRating?: number, mcUrl?: string, imdbId?: string, synopsis?: string, cover?: string, year?: number }> };

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

export type RateMovieMutationVariables = Exact<{
  id: Scalars['ID'];
  rating: Scalars['Int'];
}>;


export type RateMovieMutation = { __typename?: 'Mutation', rateMovie: { __typename?: 'Movie', id: number } };

export type NewsQueryVariables = Exact<{
  category: Scalars['String'];
}>;


export type NewsQuery = { __typename?: 'Query', news: Array<{ __typename?: 'NewsItem', title: string, url: string, metadata?: { __typename?: 'NewsItemMetadata', image?: string, description?: string }, newsworthy?: { __typename?: 'Movie' } | { __typename?: 'TvShow', id: number, name: string } }> };

export type MovieSearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type MovieSearchQuery = { __typename?: 'Query', movieSearch: Array<{ __typename?: 'MovieSearch', title: string, year?: number, imdbId: string, imdbUrl?: string, downloaded: boolean, onWaitlist: boolean, existingMovieId?: number, overview?: string, tmdbId: string }> };

export type MovieSearchResultQueryVariables = Exact<{
  imdbId: Scalars['String'];
}>;


export type MovieSearchResultQuery = { __typename?: 'Query', movieSearchResult: { __typename?: 'MovieSearch', title: string, year?: number, imdbId: string, imdbUrl?: string, downloaded: boolean, overview?: string, tmdbId: string, hasKillerRelease: boolean, hasAcceptableRelease: boolean, onWaitlist: boolean, bestRelease?: { __typename?: 'MovieRelease', codec: string, container: string, quality: string, releaseName: string, resolution: string, size: number, source: string, downloadUrl?: string } } };

export type MoviePosterQueryVariables = Exact<{
  tmdbId: Scalars['ID'];
}>;


export type MoviePosterQuery = { __typename?: 'Query', moviePoster: { __typename?: 'MoviePoster', url: string } };

export type TvShowSearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type TvShowSearchQuery = { __typename?: 'Query', tvShowSearch: Array<{ __typename?: 'TvShowSearch', title: string, year?: number, imdbId?: string, imdbUrl?: string, overview?: string, tmdbId?: string, exists?: boolean, existingTvShowId?: number }> };

export type TvShowSearchResultQueryVariables = Exact<{
  imdbId: Scalars['String'];
}>;


export type TvShowSearchResultQuery = { __typename?: 'Query', tvShowSearchResult: { __typename?: 'TvShowSearch', title: string, year?: number, imdbId?: string, imdbUrl?: string, overview?: string, tmdbId?: string } };

export type OmniSearchQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type OmniSearchQuery = { __typename?: 'Query', omnisearch: Array<{ __typename?: 'Movie', id: number, title?: string, overview?: string, runtime?: number, releaseDate?: any, posterImageThumbnail?: string } | { __typename?: 'TvShow', id: number, name: string, posterImageThumbnail?: string, tmdbDetails?: { __typename?: 'TvShowTmdbDetails', voteAverage?: string, firstAirDate?: string, id?: number }, traktDetails?: { __typename?: 'TraktDetails', overview?: string, runtime?: number, genres?: Array<string>, ids?: { __typename?: 'TraktIds', tmdb?: string } } }> };

export type TvShowsQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
}>;


export type TvShowsQuery = { __typename?: 'Query', tvShows: Array<{ __typename?: 'TvShow', id: number, name: string, posterImage?: string, posterImageThumbnail?: string, backdropImage?: string, posterImageBase64?: string, tmdbDetails?: { __typename?: 'TvShowTmdbDetails', voteAverage?: string, firstAirDate?: string, id?: number }, traktDetails?: { __typename?: 'TraktDetails', runtime?: number, ids?: { __typename?: 'TraktIds', tmdb?: string } } }> };

export type TvShowQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TvShowQuery = { __typename?: 'Query', tvShow: { __typename?: 'TvShow', id: number, name: string, status?: string, watching?: boolean, collected?: boolean, waitlist?: boolean, posterImage?: string, backdropImage?: string, backdropImageBase64?: string, tmdbDetails?: { __typename?: 'TvShowTmdbDetails', voteAverage?: string, firstAirDate?: string, id?: number }, traktDetails?: { __typename?: 'TraktDetails', overview?: string, runtime?: number, genres?: Array<string>, network?: string, ids?: { __typename?: 'TraktIds', tmdb?: string } }, episodes: Array<{ __typename?: 'Episode', id?: number, name?: string, season?: number, episode?: number, stillImage?: string, stillImageThumbnail?: string, stillImageBase64?: string, watched?: boolean, tmdbDetails?: { __typename?: 'EpisodeTmdbDetails', name?: string, overview?: string } }>, newsItems: Array<{ __typename?: 'NewsItem', title: string, url: string, metadata?: { __typename?: 'NewsItemMetadata', image?: string, description?: string } }> } };

export type TvShowSummaryQueryVariables = Exact<{
  imdbId: Scalars['ID'];
}>;


export type TvShowSummaryQuery = { __typename?: 'Query', tvShowSummary: { __typename?: 'TvShowSummary', title?: string, overview?: string, rating?: string, status?: string, firstAired?: any, runtime?: number, airedEpisodes?: number, genres?: Array<string> } };

export type EpisodeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EpisodeQuery = { __typename?: 'Query', episode: { __typename?: 'Episode', id?: number, name?: string, season?: number, episode?: number, stillImage?: string, stillImageThumbnail?: string, stillImageBase64?: string, watched?: boolean, watchedAt?: any, tmdbDetails?: { __typename?: 'EpisodeTmdbDetails', name?: string, overview?: string, firstAirDate?: string }, tvShow: { __typename?: 'TvShow', id: number, name: string, traktDetails?: { __typename?: 'TraktDetails', runtime?: number } }, bestRelease?: { __typename?: 'EpisodeRelease', resolution: string } } };

export type EpisodesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<EpisodeCategory>;
}>;


export type EpisodesQuery = { __typename?: 'Query', episodes: Array<{ __typename?: 'Episode', id?: number, name?: string, season?: number, episode?: number, stillImage?: string, stillImageThumbnail?: string, stillImageBase64?: string, watched?: boolean, tmdbDetails?: { __typename?: 'EpisodeTmdbDetails', name?: string, overview?: string, firstAirDate?: string }, bestRelease?: { __typename?: 'EpisodeRelease', resolution: string }, tvShow: { __typename?: 'TvShow', id: number, name: string } }> };

export type TvShowPosterQueryVariables = Exact<{
  tmdbId: Scalars['ID'];
}>;


export type TvShowPosterQuery = { __typename?: 'Query', tvShowPoster: { __typename?: 'TvShowPoster', url: string } };

export type UnwatchTvShowMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnwatchTvShowMutation = { __typename?: 'Mutation', unwatchTvShow: { __typename?: 'TvShow', id: number } };

export type RemoveTvShowFromWaitlistMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RemoveTvShowFromWaitlistMutation = { __typename?: 'Mutation', removeTvShowFromWaitlist: { __typename?: 'TvShow', id: number } };

export type WatchTvShowMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WatchTvShowMutation = { __typename?: 'Mutation', watchTvShow: { __typename?: 'TvShow', id: number } };

export type CollectTvShowMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectTvShowMutation = { __typename?: 'Mutation', collectTvShow: { __typename?: 'TvShow', id: number } };

export type SampleTvShowMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SampleTvShowMutation = { __typename?: 'Mutation', sampleTvShow: { __typename?: 'TvShow', id: number } };

export type EpisodeWatchedMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type EpisodeWatchedMutation = { __typename?: 'Mutation', episodeWatched: { __typename?: 'Episode', id?: number } };


export const CalendarDocument = gql`
    query Calendar($category: CalendarCategory) {
  calendar(category: $category) {
    __typename
    ... on Movie {
      id
      posterImage
      title
      availableDate
    }
    ... on CalendarEpisode {
      id
      firstAired
      season
      name
      title
      tmdbDetails {
        id
      }
    }
  }
}
    `;

/**
 * __useCalendarQuery__
 *
 * To run a query within a React component, call `useCalendarQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalendarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalendarQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useCalendarQuery(baseOptions?: Apollo.QueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, options);
      }
export function useCalendarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalendarQuery, CalendarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalendarQuery, CalendarQueryVariables>(CalendarDocument, options);
        }
export type CalendarQueryHookResult = ReturnType<typeof useCalendarQuery>;
export type CalendarLazyQueryHookResult = ReturnType<typeof useCalendarLazyQuery>;
export type CalendarQueryResult = Apollo.QueryResult<CalendarQuery, CalendarQueryVariables>;
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
    posterImage
    posterImageThumbnail
    posterImageBase64
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
    imdbId
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
    backdropImageBase64
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
export const RateMovieDocument = gql`
    mutation RateMovie($id: ID!, $rating: Int!) {
  rateMovie(id: $id, rating: $rating) {
    id
  }
}
    `;
export type RateMovieMutationFn = Apollo.MutationFunction<RateMovieMutation, RateMovieMutationVariables>;

/**
 * __useRateMovieMutation__
 *
 * To run a mutation, you first call `useRateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rateMovieMutation, { data, loading, error }] = useRateMovieMutation({
 *   variables: {
 *      id: // value for 'id'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useRateMovieMutation(baseOptions?: Apollo.MutationHookOptions<RateMovieMutation, RateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RateMovieMutation, RateMovieMutationVariables>(RateMovieDocument, options);
      }
export type RateMovieMutationHookResult = ReturnType<typeof useRateMovieMutation>;
export type RateMovieMutationResult = Apollo.MutationResult<RateMovieMutation>;
export type RateMovieMutationOptions = Apollo.BaseMutationOptions<RateMovieMutation, RateMovieMutationVariables>;
export const NewsDocument = gql`
    query News($category: String!) {
  news(category: $category) {
    title
    url
    metadata {
      image
      description
    }
    newsworthy {
      ... on TvShow {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useNewsQuery(baseOptions: Apollo.QueryHookOptions<NewsQuery, NewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
      }
export function useNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NewsQuery, NewsQueryVariables>(NewsDocument, options);
        }
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsQueryResult = Apollo.QueryResult<NewsQuery, NewsQueryVariables>;
export const MovieSearchDocument = gql`
    query MovieSearch($query: String!) {
  movieSearch(query: $query) {
    title
    year
    imdbId
    imdbUrl
    downloaded
    onWaitlist
    existingMovieId
    overview
    tmdbId
  }
}
    `;

/**
 * __useMovieSearchQuery__
 *
 * To run a query within a React component, call `useMovieSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useMovieSearchQuery(baseOptions: Apollo.QueryHookOptions<MovieSearchQuery, MovieSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieSearchQuery, MovieSearchQueryVariables>(MovieSearchDocument, options);
      }
export function useMovieSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieSearchQuery, MovieSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieSearchQuery, MovieSearchQueryVariables>(MovieSearchDocument, options);
        }
export type MovieSearchQueryHookResult = ReturnType<typeof useMovieSearchQuery>;
export type MovieSearchLazyQueryHookResult = ReturnType<typeof useMovieSearchLazyQuery>;
export type MovieSearchQueryResult = Apollo.QueryResult<MovieSearchQuery, MovieSearchQueryVariables>;
export const MovieSearchResultDocument = gql`
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
    onWaitlist
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

/**
 * __useMovieSearchResultQuery__
 *
 * To run a query within a React component, call `useMovieSearchResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieSearchResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieSearchResultQuery({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useMovieSearchResultQuery(baseOptions: Apollo.QueryHookOptions<MovieSearchResultQuery, MovieSearchResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieSearchResultQuery, MovieSearchResultQueryVariables>(MovieSearchResultDocument, options);
      }
export function useMovieSearchResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieSearchResultQuery, MovieSearchResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieSearchResultQuery, MovieSearchResultQueryVariables>(MovieSearchResultDocument, options);
        }
export type MovieSearchResultQueryHookResult = ReturnType<typeof useMovieSearchResultQuery>;
export type MovieSearchResultLazyQueryHookResult = ReturnType<typeof useMovieSearchResultLazyQuery>;
export type MovieSearchResultQueryResult = Apollo.QueryResult<MovieSearchResultQuery, MovieSearchResultQueryVariables>;
export const MoviePosterDocument = gql`
    query MoviePoster($tmdbId: ID!) {
  moviePoster(tmdbId: $tmdbId) {
    url
  }
}
    `;

/**
 * __useMoviePosterQuery__
 *
 * To run a query within a React component, call `useMoviePosterQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviePosterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviePosterQuery({
 *   variables: {
 *      tmdbId: // value for 'tmdbId'
 *   },
 * });
 */
export function useMoviePosterQuery(baseOptions: Apollo.QueryHookOptions<MoviePosterQuery, MoviePosterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoviePosterQuery, MoviePosterQueryVariables>(MoviePosterDocument, options);
      }
export function useMoviePosterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviePosterQuery, MoviePosterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoviePosterQuery, MoviePosterQueryVariables>(MoviePosterDocument, options);
        }
export type MoviePosterQueryHookResult = ReturnType<typeof useMoviePosterQuery>;
export type MoviePosterLazyQueryHookResult = ReturnType<typeof useMoviePosterLazyQuery>;
export type MoviePosterQueryResult = Apollo.QueryResult<MoviePosterQuery, MoviePosterQueryVariables>;
export const TvShowSearchDocument = gql`
    query TvShowSearch($query: String!) {
  tvShowSearch(query: $query) {
    title
    year
    imdbId
    imdbUrl
    overview
    tmdbId
    exists
    existingTvShowId
  }
}
    `;

/**
 * __useTvShowSearchQuery__
 *
 * To run a query within a React component, call `useTvShowSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTvShowSearchQuery(baseOptions: Apollo.QueryHookOptions<TvShowSearchQuery, TvShowSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowSearchQuery, TvShowSearchQueryVariables>(TvShowSearchDocument, options);
      }
export function useTvShowSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowSearchQuery, TvShowSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowSearchQuery, TvShowSearchQueryVariables>(TvShowSearchDocument, options);
        }
export type TvShowSearchQueryHookResult = ReturnType<typeof useTvShowSearchQuery>;
export type TvShowSearchLazyQueryHookResult = ReturnType<typeof useTvShowSearchLazyQuery>;
export type TvShowSearchQueryResult = Apollo.QueryResult<TvShowSearchQuery, TvShowSearchQueryVariables>;
export const TvShowSearchResultDocument = gql`
    query TvShowSearchResult($imdbId: String!) {
  tvShowSearchResult(imdbId: $imdbId) {
    title
    year
    imdbId
    imdbUrl
    overview
    tmdbId
  }
}
    `;

/**
 * __useTvShowSearchResultQuery__
 *
 * To run a query within a React component, call `useTvShowSearchResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowSearchResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowSearchResultQuery({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useTvShowSearchResultQuery(baseOptions: Apollo.QueryHookOptions<TvShowSearchResultQuery, TvShowSearchResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowSearchResultQuery, TvShowSearchResultQueryVariables>(TvShowSearchResultDocument, options);
      }
export function useTvShowSearchResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowSearchResultQuery, TvShowSearchResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowSearchResultQuery, TvShowSearchResultQueryVariables>(TvShowSearchResultDocument, options);
        }
export type TvShowSearchResultQueryHookResult = ReturnType<typeof useTvShowSearchResultQuery>;
export type TvShowSearchResultLazyQueryHookResult = ReturnType<typeof useTvShowSearchResultLazyQuery>;
export type TvShowSearchResultQueryResult = Apollo.QueryResult<TvShowSearchResultQuery, TvShowSearchResultQueryVariables>;
export const OmniSearchDocument = gql`
    query OmniSearch($query: String!) {
  omnisearch(query: $query) {
    ... on Movie {
      id
      title
      overview
      runtime
      releaseDate
      posterImageThumbnail
    }
    ... on TvShow {
      id
      name
      posterImageThumbnail
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

/**
 * __useOmniSearchQuery__
 *
 * To run a query within a React component, call `useOmniSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmniSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmniSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useOmniSearchQuery(baseOptions: Apollo.QueryHookOptions<OmniSearchQuery, OmniSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OmniSearchQuery, OmniSearchQueryVariables>(OmniSearchDocument, options);
      }
export function useOmniSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OmniSearchQuery, OmniSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OmniSearchQuery, OmniSearchQueryVariables>(OmniSearchDocument, options);
        }
export type OmniSearchQueryHookResult = ReturnType<typeof useOmniSearchQuery>;
export type OmniSearchLazyQueryHookResult = ReturnType<typeof useOmniSearchLazyQuery>;
export type OmniSearchQueryResult = Apollo.QueryResult<OmniSearchQuery, OmniSearchQueryVariables>;
export const TvShowsDocument = gql`
    query TvShows($category: String, $first: Int, $skip: Int, $query: String) {
  tvShows(category: $category, first: $first, skip: $skip, query: $query) {
    id
    name
    posterImage
    posterImageThumbnail
    backdropImage
    posterImageBase64
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

/**
 * __useTvShowsQuery__
 *
 * To run a query within a React component, call `useTvShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowsQuery({
 *   variables: {
 *      category: // value for 'category'
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      query: // value for 'query'
 *   },
 * });
 */
export function useTvShowsQuery(baseOptions?: Apollo.QueryHookOptions<TvShowsQuery, TvShowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowsQuery, TvShowsQueryVariables>(TvShowsDocument, options);
      }
export function useTvShowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowsQuery, TvShowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowsQuery, TvShowsQueryVariables>(TvShowsDocument, options);
        }
export type TvShowsQueryHookResult = ReturnType<typeof useTvShowsQuery>;
export type TvShowsLazyQueryHookResult = ReturnType<typeof useTvShowsLazyQuery>;
export type TvShowsQueryResult = Apollo.QueryResult<TvShowsQuery, TvShowsQueryVariables>;
export const TvShowDocument = gql`
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
    backdropImageBase64
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
      stillImageBase64
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

/**
 * __useTvShowQuery__
 *
 * To run a query within a React component, call `useTvShowQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTvShowQuery(baseOptions: Apollo.QueryHookOptions<TvShowQuery, TvShowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowQuery, TvShowQueryVariables>(TvShowDocument, options);
      }
export function useTvShowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowQuery, TvShowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowQuery, TvShowQueryVariables>(TvShowDocument, options);
        }
export type TvShowQueryHookResult = ReturnType<typeof useTvShowQuery>;
export type TvShowLazyQueryHookResult = ReturnType<typeof useTvShowLazyQuery>;
export type TvShowQueryResult = Apollo.QueryResult<TvShowQuery, TvShowQueryVariables>;
export const TvShowSummaryDocument = gql`
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

/**
 * __useTvShowSummaryQuery__
 *
 * To run a query within a React component, call `useTvShowSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowSummaryQuery({
 *   variables: {
 *      imdbId: // value for 'imdbId'
 *   },
 * });
 */
export function useTvShowSummaryQuery(baseOptions: Apollo.QueryHookOptions<TvShowSummaryQuery, TvShowSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowSummaryQuery, TvShowSummaryQueryVariables>(TvShowSummaryDocument, options);
      }
export function useTvShowSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowSummaryQuery, TvShowSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowSummaryQuery, TvShowSummaryQueryVariables>(TvShowSummaryDocument, options);
        }
export type TvShowSummaryQueryHookResult = ReturnType<typeof useTvShowSummaryQuery>;
export type TvShowSummaryLazyQueryHookResult = ReturnType<typeof useTvShowSummaryLazyQuery>;
export type TvShowSummaryQueryResult = Apollo.QueryResult<TvShowSummaryQuery, TvShowSummaryQueryVariables>;
export const EpisodeDocument = gql`
    query Episode($id: ID!) {
  episode(id: $id) {
    id
    name
    season
    episode
    stillImage
    stillImageThumbnail
    stillImageBase64
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

/**
 * __useEpisodeQuery__
 *
 * To run a query within a React component, call `useEpisodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEpisodeQuery(baseOptions: Apollo.QueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
      }
export function useEpisodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodeQuery, EpisodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, options);
        }
export type EpisodeQueryHookResult = ReturnType<typeof useEpisodeQuery>;
export type EpisodeLazyQueryHookResult = ReturnType<typeof useEpisodeLazyQuery>;
export type EpisodeQueryResult = Apollo.QueryResult<EpisodeQuery, EpisodeQueryVariables>;
export const EpisodesDocument = gql`
    query Episodes($first: Int, $skip: Int, $category: EpisodeCategory) {
  episodes(first: $first, skip: $skip, category: $category) {
    id
    name
    season
    episode
    stillImage
    stillImageThumbnail
    stillImageBase64
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

/**
 * __useEpisodesQuery__
 *
 * To run a query within a React component, call `useEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
      }
export function useEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export type EpisodesQueryHookResult = ReturnType<typeof useEpisodesQuery>;
export type EpisodesLazyQueryHookResult = ReturnType<typeof useEpisodesLazyQuery>;
export type EpisodesQueryResult = Apollo.QueryResult<EpisodesQuery, EpisodesQueryVariables>;
export const TvShowPosterDocument = gql`
    query TvShowPoster($tmdbId: ID!) {
  tvShowPoster(tmdbId: $tmdbId) {
    url
  }
}
    `;

/**
 * __useTvShowPosterQuery__
 *
 * To run a query within a React component, call `useTvShowPosterQuery` and pass it any options that fit your needs.
 * When your component renders, `useTvShowPosterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTvShowPosterQuery({
 *   variables: {
 *      tmdbId: // value for 'tmdbId'
 *   },
 * });
 */
export function useTvShowPosterQuery(baseOptions: Apollo.QueryHookOptions<TvShowPosterQuery, TvShowPosterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TvShowPosterQuery, TvShowPosterQueryVariables>(TvShowPosterDocument, options);
      }
export function useTvShowPosterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TvShowPosterQuery, TvShowPosterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TvShowPosterQuery, TvShowPosterQueryVariables>(TvShowPosterDocument, options);
        }
export type TvShowPosterQueryHookResult = ReturnType<typeof useTvShowPosterQuery>;
export type TvShowPosterLazyQueryHookResult = ReturnType<typeof useTvShowPosterLazyQuery>;
export type TvShowPosterQueryResult = Apollo.QueryResult<TvShowPosterQuery, TvShowPosterQueryVariables>;
export const UnwatchTvShowDocument = gql`
    mutation UnwatchTvShow($id: ID!) {
  unwatchTvShow(id: $id) {
    id
  }
}
    `;
export type UnwatchTvShowMutationFn = Apollo.MutationFunction<UnwatchTvShowMutation, UnwatchTvShowMutationVariables>;

/**
 * __useUnwatchTvShowMutation__
 *
 * To run a mutation, you first call `useUnwatchTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnwatchTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unwatchTvShowMutation, { data, loading, error }] = useUnwatchTvShowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnwatchTvShowMutation(baseOptions?: Apollo.MutationHookOptions<UnwatchTvShowMutation, UnwatchTvShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnwatchTvShowMutation, UnwatchTvShowMutationVariables>(UnwatchTvShowDocument, options);
      }
export type UnwatchTvShowMutationHookResult = ReturnType<typeof useUnwatchTvShowMutation>;
export type UnwatchTvShowMutationResult = Apollo.MutationResult<UnwatchTvShowMutation>;
export type UnwatchTvShowMutationOptions = Apollo.BaseMutationOptions<UnwatchTvShowMutation, UnwatchTvShowMutationVariables>;
export const RemoveTvShowFromWaitlistDocument = gql`
    mutation RemoveTvShowFromWaitlist($id: ID!) {
  removeTvShowFromWaitlist(id: $id) {
    id
  }
}
    `;
export type RemoveTvShowFromWaitlistMutationFn = Apollo.MutationFunction<RemoveTvShowFromWaitlistMutation, RemoveTvShowFromWaitlistMutationVariables>;

/**
 * __useRemoveTvShowFromWaitlistMutation__
 *
 * To run a mutation, you first call `useRemoveTvShowFromWaitlistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTvShowFromWaitlistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTvShowFromWaitlistMutation, { data, loading, error }] = useRemoveTvShowFromWaitlistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTvShowFromWaitlistMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTvShowFromWaitlistMutation, RemoveTvShowFromWaitlistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTvShowFromWaitlistMutation, RemoveTvShowFromWaitlistMutationVariables>(RemoveTvShowFromWaitlistDocument, options);
      }
export type RemoveTvShowFromWaitlistMutationHookResult = ReturnType<typeof useRemoveTvShowFromWaitlistMutation>;
export type RemoveTvShowFromWaitlistMutationResult = Apollo.MutationResult<RemoveTvShowFromWaitlistMutation>;
export type RemoveTvShowFromWaitlistMutationOptions = Apollo.BaseMutationOptions<RemoveTvShowFromWaitlistMutation, RemoveTvShowFromWaitlistMutationVariables>;
export const WatchTvShowDocument = gql`
    mutation WatchTvShow($id: ID!) {
  watchTvShow(id: $id) {
    id
  }
}
    `;
export type WatchTvShowMutationFn = Apollo.MutationFunction<WatchTvShowMutation, WatchTvShowMutationVariables>;

/**
 * __useWatchTvShowMutation__
 *
 * To run a mutation, you first call `useWatchTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWatchTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [watchTvShowMutation, { data, loading, error }] = useWatchTvShowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWatchTvShowMutation(baseOptions?: Apollo.MutationHookOptions<WatchTvShowMutation, WatchTvShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WatchTvShowMutation, WatchTvShowMutationVariables>(WatchTvShowDocument, options);
      }
export type WatchTvShowMutationHookResult = ReturnType<typeof useWatchTvShowMutation>;
export type WatchTvShowMutationResult = Apollo.MutationResult<WatchTvShowMutation>;
export type WatchTvShowMutationOptions = Apollo.BaseMutationOptions<WatchTvShowMutation, WatchTvShowMutationVariables>;
export const CollectTvShowDocument = gql`
    mutation CollectTvShow($id: ID!) {
  collectTvShow(id: $id) {
    id
  }
}
    `;
export type CollectTvShowMutationFn = Apollo.MutationFunction<CollectTvShowMutation, CollectTvShowMutationVariables>;

/**
 * __useCollectTvShowMutation__
 *
 * To run a mutation, you first call `useCollectTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectTvShowMutation, { data, loading, error }] = useCollectTvShowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectTvShowMutation(baseOptions?: Apollo.MutationHookOptions<CollectTvShowMutation, CollectTvShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CollectTvShowMutation, CollectTvShowMutationVariables>(CollectTvShowDocument, options);
      }
export type CollectTvShowMutationHookResult = ReturnType<typeof useCollectTvShowMutation>;
export type CollectTvShowMutationResult = Apollo.MutationResult<CollectTvShowMutation>;
export type CollectTvShowMutationOptions = Apollo.BaseMutationOptions<CollectTvShowMutation, CollectTvShowMutationVariables>;
export const SampleTvShowDocument = gql`
    mutation SampleTvShow($id: ID!) {
  sampleTvShow(id: $id) {
    id
  }
}
    `;
export type SampleTvShowMutationFn = Apollo.MutationFunction<SampleTvShowMutation, SampleTvShowMutationVariables>;

/**
 * __useSampleTvShowMutation__
 *
 * To run a mutation, you first call `useSampleTvShowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSampleTvShowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sampleTvShowMutation, { data, loading, error }] = useSampleTvShowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSampleTvShowMutation(baseOptions?: Apollo.MutationHookOptions<SampleTvShowMutation, SampleTvShowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SampleTvShowMutation, SampleTvShowMutationVariables>(SampleTvShowDocument, options);
      }
export type SampleTvShowMutationHookResult = ReturnType<typeof useSampleTvShowMutation>;
export type SampleTvShowMutationResult = Apollo.MutationResult<SampleTvShowMutation>;
export type SampleTvShowMutationOptions = Apollo.BaseMutationOptions<SampleTvShowMutation, SampleTvShowMutationVariables>;
export const EpisodeWatchedDocument = gql`
    mutation EpisodeWatched($id: ID!) {
  episodeWatched(id: $id) {
    id
  }
}
    `;
export type EpisodeWatchedMutationFn = Apollo.MutationFunction<EpisodeWatchedMutation, EpisodeWatchedMutationVariables>;

/**
 * __useEpisodeWatchedMutation__
 *
 * To run a mutation, you first call `useEpisodeWatchedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEpisodeWatchedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [episodeWatchedMutation, { data, loading, error }] = useEpisodeWatchedMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEpisodeWatchedMutation(baseOptions?: Apollo.MutationHookOptions<EpisodeWatchedMutation, EpisodeWatchedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EpisodeWatchedMutation, EpisodeWatchedMutationVariables>(EpisodeWatchedDocument, options);
      }
export type EpisodeWatchedMutationHookResult = ReturnType<typeof useEpisodeWatchedMutation>;
export type EpisodeWatchedMutationResult = Apollo.MutationResult<EpisodeWatchedMutation>;
export type EpisodeWatchedMutationOptions = Apollo.BaseMutationOptions<EpisodeWatchedMutation, EpisodeWatchedMutationVariables>;