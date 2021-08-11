import React from "react";

import { resolutionDisplay } from "utilities.ts";

export default function ReleaseInformation({ killer, acceptable, release }) {
  const { releaseName, source, size, resolution, container } = release;

  const releaseLine = `${source} - ${container} - ${resolutionDisplay(
    resolution
  )} - ${Math.round(size / 1000000000, 2)}GB`;

  return (
    <div>
      <h2 className="pb-4 text-3xl text-center text-gray-200 md:text-left">
        Best release
      </h2>
      <p className="text-lg font-semibold capitalize">{releaseName}</p>
      <p className="mb-4 capitalize">{releaseLine}</p>

      {killer && <h2 className="font-bold">This is a killer release</h2>}
      {!killer && acceptable && (
        <h2 className="font-bold">This is an acceptable release</h2>
      )}
    </div>
  );
}
