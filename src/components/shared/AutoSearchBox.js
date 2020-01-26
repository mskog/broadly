import React from "react";

import { DebounceInput } from "react-debounce-input";

export default function AutoSearchBox({
  pathname,
  history,
  query,
  placeholder,
  minLength = 3,
  debounceTimeout = 200
}) {
  const handleQueryChange = event => {
    history.replace({ pathname, search: `?query=${event.target.value}` });
  };

  return (
    <DebounceInput
      minLength={minLength}
      debounceTimeout={debounceTimeout}
      value={query}
      onChange={handleQueryChange}
      className="w-full px-3 py-2 my-8 text-gray-700 bg-gray-200 border rounded shadow appearance-none md:w-6/12 xt-gray-700 mxleading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
    />
  );
}