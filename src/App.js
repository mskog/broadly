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
        className="h-screen App bg-background-blue"
      >
        <div className="container px-8 mx-auto overflow-auto">
          <Movies />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
