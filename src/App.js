import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/shared/Navigation";

import Movies from "./components/movies/Movies";
import Movie from "./components/movie/Movie";

import TvShows from "./components/tv_shows/TvShows";
import TvShow from "./components/tv_show/TvShow";

function App() {
  document.body.classList.add("bg-background-blue");

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="h-screen App bg-background-blue"
      >
        <Navigation />
        <div className="pt-10">
          <Switch>
            <Redirect from="/" exact to="/movies/watched" />
            <Route path="/movies/:id(\d+)" component={Movie} />
            <Route path="/movies/:category(\w+)" component={Movies} />
            <Route path="/tv_shows/:category" component={TvShows} />
            <Route path="/tv_show/:id" component={TvShow} />
          </Switch>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
