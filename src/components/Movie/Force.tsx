import React from "react";
import LoaderButton from "components/shared/LoaderButton";

import { MovieRelease } from "generated/graphql";

type ForceProps = {
  handle: () => void;
  bestRelease?: MovieRelease;
};

const Force = ({ handle, bestRelease }: ForceProps): JSX.Element => {
  if (!bestRelease) return <></>;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        onClick={handle}
      >
        Force
      </LoaderButton>
    </div>
  );
};

export default Force;
