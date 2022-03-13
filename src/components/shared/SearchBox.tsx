import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({
  pathname,
  history,
  query,
  placeholder
}: {
  pathname: string;
  query: string | null;
  placeholder: string;
} & Pick<RouteComponentProps, "history">): JSX.Element => {
  const [text, setText] = useState(query || "");

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText(event.currentTarget.value);
    history.replace({ pathname, search: `?query=${text}` });
  };

  const clearSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setText("");
    history.replace({ pathname, search: `` });
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex justify-center w-full" onSubmit={handleChange}>
        <input
          type="text"
          value={text}
          className="flex-grow px-3 py-2 leading-tight text-gray-700 bg-gray-200 border rounded rounded-r-none shadow appearance-none md:flex-grow-0 md:w-6/12 focus:outline-none focus:shadow-outline"
          placeholder={placeholder}
          onChange={(event) => setText(event.target.value)}
        />
        <button
          type="submit"
          className="px-3 py-2 bg-teal-500 rounded rounded-l-none"
        >
          <FontAwesomeIcon className="text-gray-300" icon={faSearch} />
        </button>
      </form>
      {text !== "" && (
        <div className="pt-1">
          <button
            type="button"
            className="text-sm text-gray-500 underline"
            onClick={clearSearch}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
