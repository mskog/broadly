import React, { useState } from "react";

const Login = (): JSX.Element => {
  const [token, setToken] = useState(localStorage.getItem("auth_key"));

  const submitHandler = (event: React.FormEvent) => {
    if (!token) {
      return;
    }
    event.preventDefault();
    localStorage.setItem("auth_key", token);
    window.location.href = "/";
  };

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setToken(event.currentTarget.value);
  };

  return (
    <div className="container px-4 pt-20 mx-auto overflow-auto">
      <form
        className="max-w-4xl px-8 pt-6 pb-8 mb-4 rounded shadow-md bg-background-blue-2"
        onSubmit={submitHandler}
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-200"
            htmlFor="token"
          >
            Token{" "}
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="token"
            type="text"
            value={token || ""}
            onChange={changeHandler}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Set Token
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
