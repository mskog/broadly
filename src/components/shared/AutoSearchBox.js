import React, { useState } from "react";

import { DebounceInput } from "react-debounce-input";

export default function AutoSearchBox({
  pathname,
  history,
  query,
  placeholder,
  minLength = 3,
  debounceTimeout = 200
}) {
  const [text, setText] = useState(query || "");

  const handleQueryChange = event => {
    setText(event.target.value);
    history.replace({ pathname, search: `?query=${event.target.value}` });
  };

  const clear = event => {
    event.preventDefault();
    setText("");
    history.replace({ pathname, search: "" });
  };

  return (
    <>
      <DebounceInput
        minLength={minLength}
        debounceTimeout={debounceTimeout}
        value={text}
        onChange={handleQueryChange}
        className="w-full px-3 py-2 mt-8 text-gray-700 bg-gray-200 border rounded shadow appearance-none md:w-6/12 xt-gray-700 mxleading-tight focus:outline-none focus:shadow-outline"
        placeholder={placeholder}
      />
      {text !== "" && (
        <div className="pt-1">
          <button
            type="button"
            className="text-sm text-gray-500 underline"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
}
