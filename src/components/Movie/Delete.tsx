import React from "react";

import { useDeleteMovieMutation } from "generated/graphql";

import { LoaderButton } from "components/shared";

type DeleteProps = {
  id: number;
  handle: () => void;
};
const Delete = ({ id, handle }: DeleteProps): JSX.Element => {
  const [deleteMovie] = useDeleteMovieMutation({
    variables: { id },
    update: handle
  });

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        onClick={deleteMovie}
      >
        Delete
      </LoaderButton>
    </div>
  );
};

export default Delete;
