import React from "react";
import LoaderButton from "components/shared/LoaderButton";

import { useForceMovieMutation } from "generated/graphql";

import { MovieRelease } from "generated/graphql";

type ForceProps = {
  id: number;
  handle: () => void;
};

const Force = ({ id, handle }: ForceProps): JSX.Element => {
  const [forceMovie] = useForceMovieMutation({
    variables: { id },
    update: handle
  });

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        onClick={forceMovie}
      >
        Force
      </LoaderButton>
    </div>
  );
};

export default Force;
