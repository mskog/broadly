/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import "typeface-roboto";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useLocation
} from "react-router-dom";

import { ApolloClient } from "apollo-client";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "@apollo/react-hooks";

import Calendar from "components/Calendar/Calendar";
import PtpMovieRecommendations from "components/ptp_movie_recommendations/PtpMovieRecommendations";

import TopNavigation from "./components/shared/TopNavigation";

import Login from "./components/shared/Login";

import Movies from "./components/Movies/Movies";
import BestMovies from "./components/Movies/BestMovies";
import Movie from "./components/movie/Movie";

import TvShows from "./components/tv_shows/TvShows";
import TvShow from "./components/tv_show/TvShow";

import Episode from "./components/Episode/Episode";

import Episodes from "./components/episodes/Episodes";

import Search from "./components/search/Search";

import MovieSearchResult from "./components/search/movies/Details";
import TvShowSearchResult from "./components/search/tv_shows/Details";

import News from "./components/News/News";

import schema from "./schema.json";

function App() {
  document.body.classList.add("bg-background-blue");

  const { pathname } = useLocation();
  const [client, setClient] = useState(undefined);
  const [authKey, setAuthKey] = useState(localStorage.getItem("auth_key"));

  useEffect(() => {
    if (localStorage.getItem("auth_key")) {
      setAuthKey(localStorage.getItem("auth_key"));
    }
  });

  useEffect(() => {
    const fragmentMatcher = new IntrospectionFragmentMatcher({
      introspectionQueryResultData: schema
    });
    const cache = new InMemoryCache({ fragmentMatcher });

    const c = new ApolloClient(
      {
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
              Authorization: `Basic ${authKey}`
            }
          })
        ]),
        cache
      },
      []
    );

    persistCache({
      cache,
      storage: window.localStorage
    }).then(() => {
      setClient(c);
    });
    return () => {};
  }, []);

  if (client === undefined) return <div>Loading...</div>;

  const TopNavigationWithRouter = withRouter(TopNavigation);

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen text-gray-400 App bg-background-blue"
      >
        <TopNavigationWithRouter />
        <div className="">
          <Switch>
            {authKey || pathname === "/login" ? "" : <Redirect to="/login" />}
            <Redirect from="/" exact to="/movies/watched" />
            <Route path="/login" component={Login} />
            <Route path="/movies/:id(\d+)" component={Movie} />
            <Route path="/best_movies/:year(\d+)?" component={BestMovies} />
            <Route
              path="/ptp_movie_recommendations/"
              component={PtpMovieRecommendations}
            />
            <Route path="/movies/:category(\w+)" component={Movies} />
            <Route path="/tv_shows/:id(\d+)" component={TvShow} />
            <Route path="/tv_shows/:category(\w+)" component={TvShows} />
            <Route path="/episodes/:id(\d+)" component={Episode} />
            <Route path="/episodes/:category(\w+)?" component={Episodes} />
            <Route
              path="/search/movies/details/:imdbId"
              component={MovieSearchResult}
            />
            <Route
              path="/search/tv_shows/details/:imdbId"
              component={TvShowSearchResult}
            />
            <Route path="/search/:category?" component={Search} />
            <Route path="/calendar/:category(\w+)?" component={Calendar} />
            <Route path="/news/:category" component={News} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
