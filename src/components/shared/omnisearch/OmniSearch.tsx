/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";

import { DebounceInput } from "react-debounce-input";
import { RouteComponentProps, withRouter } from "react-router-dom";

import { useOmniSearchQuery } from "generated/graphql";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Result from "./Result";

type OmniSearchProps = {
  open: boolean;
  closeHandler: () => void;
} & RouteComponentProps;

const OmniSearch = ({ open, closeHandler, history }: OmniSearchProps) => {
  const [query, setQuery] = useState("");

  const { data } = useOmniSearchQuery({
    skip: !query,
    variables: { query },
    fetchPolicy: "cache-and-network"
  });

  const handleQueryChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  };

  const handleClose = () => {
    closeHandler();
    setQuery("");
  };

  const handlePickFirst = () => {
    if (data?.omnisearch) {
      const firstResult = data.omnisearch[0];
      switch (firstResult.__typename) {
        case "Movie":
          history.push(`/movies/${data.omnisearch[0].id}`);
          break;
        case "TvShow":
          history.push(`/tv_shows/${data.omnisearch[0].id}`);
          break;
        default:
          break;
      }
      handleClose();
    }
  };

  const display = open ? "flex" : "hidden";

  return (
    <div
      className={`fixed ${display} z-50 flex items-start justify-center w-screen h-screen bg-gray-800 md:pt-16 bg-opacity-75 `}
    >
      <div className="flex flex-col w-full mx-4 -my-4 md:w-192">
        <div className="relative py-4 mt-1 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
          </div>
          <DebounceInput
            inputRef={(input) => input && input.focus()}
            minLength={3}
            debounceTimeout={200}
            value={query}
            onChange={handleQueryChange}
            className="block w-full pl-10 leading-8 form-input sm:text-sm"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                handleClose();
              }
              if (event.key === "Enter") {
                handlePickFirst();
              }
            }}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer ">
            <FontAwesomeIcon
              className="text-xl cursor-pointer"
              icon={faTimes}
              onClick={() => handleClose()}
            />
          </div>
        </div>
        {query && data && data.omnisearch && (
          <div className="grid grid-cols-1 gap-4 px-4 py-4 rounded-md bg-cool-gray-50">
            {data.omnisearch.length === 0 ? <div>Nothing found</div> : ""}
            {data.omnisearch.map((result: any) => (
              <Result
                key={`result-${result.__typename}-${result.id}`}
                result={result}
                handleClose={handleClose}
              />
            ))}
            <div className="pb-2 text-center text-indigo-800">
              <a href={`/search?query=${query}`}>
                Search for new Movies and TV Shows
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(OmniSearch);
