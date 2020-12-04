export type Movie = {
  id: number;
  title?: string;
  tmdbId?: string;
  downloadAt?: Date;
  releaseDate?: Date;
  watchedAt?: Date;
  runtime?: number;
  rtCriticsRating?: number;
  rtAudienceRating?: number;
  watched: boolean;
  personalRating?: number;
  overview?: string;
  backdropImage?: string;
  posterImage?: string;
  posterImageThumbnail?: string;
};

export type MoviesData = {
  movies: Movie[];
};

export type BestMoviesData = {
  bestMovies: Movie[];
};

export type TvShow = {
  id: number;
  name: string;
  traktDetails: {
    runtime: number;
  };
};

export type Episode = {
  id: number;
  name?: string;
  season?: number;
  episode?: number;
  stillImage?: string;
  stillImageThumbnail?: string;
  watched: boolean;
  watchedAt?: Date;
  tmdbDetails: {
    name: string;
    overview: string;
    firstAirDate: Date;
  };
  tvShow: TvShow;
};

export type EpisodesData = {
  episodes: Episode[];
};
