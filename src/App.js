import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Switch, Route, Redirect } from "react-router-dom";

import Movies from "./components/movies/Movies";
import Movie from "./components/movie/Movie";

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
        <Switch>
          <Redirect from="/" exact to="/movies/watched" />
          <Route path="/movies/:id(\d+)" component={Movie} />
          <Route path="/movies/:category(\w+)" component={Movies} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
