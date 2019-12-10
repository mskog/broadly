import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Movies from "./components/movies/Movies";

function App() {
  document.body.classList.add("bg-background-blue");

  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
  });

  return (
    <ApolloProvider client={client}>
      <div
        style={{ height: "100%" }}
        className="App bg-background-blue h-screen"
      >
        <div className="container mx-auto px-8">
          <Movies />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
