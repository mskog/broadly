/* eslint-disable */
import React, { useEffect, useState } from "react";
import "typeface-roboto";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  useLocation
} from "react-router-dom";

import {
  HttpLink,
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache
} from "@apollo/client";

import Calendar from "./components/Calendar/Calendar";
import PtpMovieRecommendations from "./components/PtpMovieRecommendations/PtpMovieRecommendations";

import TopNavigation from "./components/shared/TopNavigation";

import Login from "./components/shared/Login";

import Movies from "./components/Movies/Movies";
import BestMovies from "./components/Movies/BestMovies";
import Movie from "./components/Movie/Movie";

import TvShows from "./components/TvShows/TvShows";
import TvShow from "./components/TvShow/TvShow";

import Episode from "./components/Episode/Episode";

import Episodes from "./components/Episodes/Episodes";

import Search from "./components/Search/Search";

import MovieSearchResult from "./components/Search/movies/Details";
import TvShowSearchResult from "./components/Search/tv_shows/Details";

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
    const cache = new InMemoryCache();

    const c = new ApolloClient({
      link: ApolloLink.from([
        new HttpLink({
          uri: import.meta.env.VITE_API_URL,
          credentials: "same-origin",
          headers: {
            Authorization: `Basic ${authKey}`
          }
        })
      ]),
      defaultOptions: {
        query: {
          fetchPolicy: "no-cache"
        }
      },
      cache
    });

    setClient(c);
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
            <Route path="/search/:category(\w+)?" component={Search} />
            <Route path="/calendar/:category(\w+)?" component={Calendar} />
            <Route path="/news/:category" component={News} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
