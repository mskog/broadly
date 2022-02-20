import React from "react";
import LoaderButton from "components/shared/LoaderButton";

import { MovieRelease } from "generated/graphql";

import { useDownloadMovieMutation } from "generated/graphql";

type DownloadProps = {
  handle: () => void;
  imdbId: string;
  bestRelease?: MovieRelease;
};

const Download = ({
  handle,
  imdbId,
  bestRelease
}: DownloadProps): JSX.Element => {
  if (!bestRelease) return <></>;

  const [downloadMovie] = useDownloadMovieMutation({
    variables: { imdbId },
    update: handle
  });

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        onClick={downloadMovie}
      >
        Download Again
      </LoaderButton>
    </div>
  );
};

export default Download;
