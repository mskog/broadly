import React from "react";

export default function Delete({ handle, downloadAt }) {
  if (downloadAt) return null;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <button
        type="button"
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        onClick={handle}
      >
        Delete
      </button>
    </div>
  );
}
