import React from "react";

export default function CollectionProgress({ season }) {
  return (
    <li className="flex py-2">
      {season.completed === true && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 my-2 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
      {season.completed === false && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 my-2 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <div className="ml-3">
        <p className="text-lg font-medium text-gray-300">
          Season {season.number}
        </p>
        <p className="flex space-x-2 text-sm text-gray-400">
          <span>Aired Episodes: {season.airedEpisodes}</span>
          <span>Downloaded Episodes: {season.completedEpisodes}</span>
        </p>
      </div>
    </li>
  );
}
