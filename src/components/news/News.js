import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Loading from "components/shared/LoadingFull";

import List from "./List";

const query = gql`
  query News {
    tvShowsNews {
      title
      url
      metadata {
        image
        description
      }
      newsworthy {
        ... on TvShow {
          id
          name
        }
      }
    }
    moviesNews {
      title
      url
      metadata {
        image
        description
      }
    }
  }
`;

export default function News() {
  const { loading, error, data } = useQuery(query, {
    fetchPolicy: "cache-and-network"
  });

  let mainContent;
  if (loading && !data) {
    mainContent = <Loading />;
  } else if (error) {
    mainContent = <p>Error</p>;
  } else {
    mainContent = (
      <div>
        <List title="TV" newsItems={data.tvShowsNews} />
        <div className="mt-10" />
        <List title="Movies" newsItems={data.moviesNews} />
      </div>
    );
  }

  return (
    <div className="container px-4 mx-auto overflow-auto md:pt-10 md:max-w-4xl">
      <div className="mt-20">{mainContent}</div>
    </div>
  );
}
