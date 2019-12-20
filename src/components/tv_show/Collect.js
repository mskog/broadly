import React from "react";

export default function Collect({ handle, collected }) {
  if (collected) return null;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <button
        type="button"
        className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
        onClick={handle}
      >
        Collect
      </button>
    </div>
  );
}
