import React from "react";
import {
  useAddMovieToWaitlistMutation,
  useDownloadMovieMutation
} from "store/movies";
import { useHistory } from "react-router-dom";

import LoaderButton from "components/shared/LoaderButton";

import ReleaseInformation from "components/Movie/ReleaseInformation";

type ReleaseProps = {
  imdbId: string;
  release: any;
  acceptable: boolean;
  killer: boolean;
};

export default function Release({
  imdbId,
  release,
  acceptable,
  killer
}: ReleaseProps) {
  const history = useHistory();

  const [addMovieToWaitlist] = useAddMovieToWaitlistMutation({
    imdbId,
    update: () => {
      history.goBack();
    }
  });

  const [downloadMovie] = useDownloadMovieMutation({
    imdbId,
    update: () => {
      history.goBack();
    }
  });

  const addToWaitlistComponent = (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        onClick={addMovieToWaitlist}
      >
        Add to Waitlist
      </LoaderButton>
    </div>
  );

  const downloadComponent = (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={downloadMovie}
      >
        Download
      </LoaderButton>
    </div>
  );

  return (
    <div className="text-gray-400">
      {release && (
        <ReleaseInformation
          acceptable={acceptable}
          killer={killer}
          release={release}
        />
      )}
      <div className="flex flex-col mt-4 -mx-2 md:flex-row">
        {!killer && addToWaitlistComponent}
        {acceptable && downloadComponent}
      </div>
    </div>
  );
}
