/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import React, { Fragment, useState } from "react";

import debounce from "lodash/debounce";

import { RouteComponentProps, withRouter } from "react-router-dom";

import { useOmniSearchQuery } from "generated/graphql";

import MovieResult from "./MovieResult";
import TvShowResult from "./TvShowResult";

import { Movie, TvShow } from "generated/graphql";

import { Combobox, Dialog, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type OmniSearchProps = { closeHandler: () => void } & RouteComponentProps;

const OmniSearch = ({ closeHandler, history }: OmniSearchProps) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const debouncedSetQuery = debounce(setQuery, 100);

  const { data } = useOmniSearchQuery({
    skip: !query,
    variables: { query },
    fetchPolicy: "cache-and-network",
    context: { useApolloNetworkStatus: false }
  });

  const handleClose = () => {
    closeHandler();
    setOpen(false);
  };

  const filteredItems = data?.omnisearch?.slice(0, 4) || [];

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all">
              <Combobox
                value=""
                onChange={(item: string | Movie | TvShow) => {
                  if (typeof item === "string") {
                    return;
                  }
                  if (item.__typename === "Movie") {
                    history.push(`/movies/${item.id}`);
                  }
                  if (item.__typename === "TvShow") {
                    history.push(`/tv_shows/${item.id}`);
                  }
                }}
              >
                <div className="relative">
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-200 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => debouncedSetQuery(event.target.value)}
                  />
                </div>
                {filteredItems.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-96 scroll-py-3 overflow-y-auto p-3"
                  >
                    {filteredItems.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          classNames(
                            "flex cursor-default select-none rounded-xl p-3",
                            active ? "bg-gray-800" : ""
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            {item.__typename === "Movie" && (
                              <MovieResult movie={item} active={active} />
                            )}

                            {item.__typename === "TvShow" && (
                              <TvShowResult tvShow={item} active={active} />
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
                {query && filteredItems.length !== 0 && (
                  <div className="pb-2 text-center text-indigo-500">
                    <a href={`/search?query=${query}`}>
                      Search for new Movies and TV Shows
                    </a>
                  </div>
                )}
                {query !== "" && filteredItems.length === 0 && (
                  <div className="py-2 px-6 text-center text-sm sm:px-14">
                    <p className="mt-4 font-semibold text-gray-900">
                      No results found
                    </p>
                    <div className="pt-8 pb-2 text-center text-indigo-500">
                      <a href={`/search?query=${query}`}>
                        Search for new Movies and TV Shows
                      </a>
                    </div>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default withRouter(OmniSearch);
