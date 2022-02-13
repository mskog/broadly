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
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink
} from "@apollo/client";

import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

import { createNetworkStatusNotifier } from "react-apollo-network-status";

import { Calendar } from "components/Calendar";
import { PtpMovieRecommendations } from "components/PtpMovieRecommendations";

import { Login, TopNavigation } from "components/shared";

import { BestMovies, Movies } from "components/Movies";
import { Movie } from "components/Movie";

import { TvShows } from "components/TvShows";
import { TvShow } from "components/TvShow";

import { Episode } from "components/Episode";

import { Episodes } from "components/Episodes";

import { Search } from "components/Search";

import MovieSearchResult from "components/Search/movies/Details";
import TvShowSearchResult from "components/Search/tv_shows/Details";

import { News } from "components/News";

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier();

function LoadingIndicator(): JSX.Element {
  const status = useApolloNetworkStatus();
  if (status.numPendingQueries > 0) {
    return (
      <div className="fixed flex justify-center w-full top-4">
        <div className="w-8 h-8 border-b-2 border-gray-100 rounded-full animate-spin"></div>
      </div>
    );
  } else {
    return <></>;
  }
}

function App() {
  const status = useApolloNetworkStatus();

  document.body.classList.add("bg-background-blue");

  const { pathname } = useLocation();
  const [authKey, setAuthKey] = useState(localStorage.getItem("auth_key"));

  useEffect(() => {
    if (localStorage.getItem("auth_key")) {
      setAuthKey(localStorage.getItem("auth_key"));
    }
  });

  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage)
      });
      setClient(
        new ApolloClient({
          cache,
          link: ApolloLink.from([
            link,
            new HttpLink({
              uri: import.meta.env.VITE_API_URL,
              credentials: "same-origin",
              headers: {
                Authorization: `Basic ${authKey}`
              }
            })
          ])
        })
      );
    }

    init().catch(console.error);
  }, []);

  const cache = new InMemoryCache();

  if (client === undefined) return <div>Loading...</div>;

  const TopNavigationWithRouter = withRouter(TopNavigation);

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen text-gray-400 App bg-background-blue"
      >
        <LoadingIndicator />
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
