import React from "react";

export default function Force({ handle, downloadAt }) {
  if (!downloadAt) return null;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <button
        type="button"
        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        onClick={handle}
      >
        Force
      </button>
    </div>
  );
}
