import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/shared/Navigation";

import Movies from "./components/movies/Movies";
import Movie from "./components/movie/Movie";

import TvShows from "./components/tv_shows/TvShows";
import TvShow from "./components/tv_show/TvShow";

import Episode from "./components/episode/Episode";

import Episodes from "./components/episodes/Episodes";

import Search from "./components/search/Search";

import MovieSearchResult from "./components/search/movies/Details";

function App() {
  document.body.classList.add("bg-background-blue");

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen text-gray-400 App bg-background-blue"
      >
        <Navigation />
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
            <Route path="/search/:category?" component={Search} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
