import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, Redirect } from "react-router-dom";

import TvShowsCalendar from "components/tv_shows_calendar/TvShowsCalendar";

import Navigation from "./components/shared/Navigation";

import Movies from "./components/movies/Movies";
import Movie from "./components/movie/Movie";

import TvShows from "./components/tv_shows/TvShows";
import TvShow from "./components/tv_show/TvShow";

import Episode from "./components/episode/Episode";

import Episodes from "./components/episodes/Episodes";

import Search from "./components/search/Search";

import MovieSearchResult from "./components/search/movies/Details";
import TvShowSearchResult from "./components/search/tv_shows/Details";

function App() {
  document.body.classList.add("bg-background-blue");

  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Basic ${process.env.REACT_APP_BASIC_AUTHORIZATION_TOKEN}`
    }
  });

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen text-gray-400 App bg-background-blue"
      >
        <div className="container m-auto">
          <Navigation />
        </div>
        <div className="">
          <Switch>
            <Redirect from="/" exact to="/movies/watched" />
            <Route path="/movies/:id(\d+)" component={Movie} />
            <Route path="/movies/:category(\w+)" component={Movies} />
            <Route path="/tv_shows/:category" component={TvShows} />
            <Route path="/tv_show/:id" component={TvShow} />
            <Route path="/episode/:id" component={Episode} />
            <Route path="/episodes" component={Episodes} />
            <Route
              path="/search/movies/details/:imdbId"
              component={MovieSearchResult}
            />
            <Route
              path="/search/tv_shows/details/:imdbId"
              component={TvShowSearchResult}
            />
            <Route path="/search/:category?" component={Search} />
            <Route path="/calendar" component={TvShowsCalendar} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
