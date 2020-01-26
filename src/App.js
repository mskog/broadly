/* eslint-disable no-console */
import React from "react";
import "typeface-roboto";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "@apollo/react-hooks";

import TvShowsCalendar from "components/tv_shows_calendar/TvShowsCalendar";

import TopNavigation from "./components/shared/TopNavigation";

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

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      new HttpLink({
        uri: process.env.REACT_APP_API_URL,
        credentials: "same-origin",
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_BASIC_AUTHORIZATION_TOKEN}`
        }
      })
    ]),
    cache
  });

  const TopNavigationWithRouter = withRouter(TopNavigation);

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen overflow-scroll text-gray-400 App bg-background-blue"
      >
        <TopNavigationWithRouter />
        <div className="">
          <Switch>
            <Redirect from="/" exact to="/movies/watched" />
            <Route path="/movies/:id(\d+)" component={Movie} />
            <Route path="/movies/:category(\w+)" component={Movies} />
            <Route path="/tv_shows/:id(\d+)" component={TvShow} />
            <Route path="/tv_shows/:category(\w+)" component={TvShows} />
            <Route path="/episodes/:id" component={Episode} />
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
