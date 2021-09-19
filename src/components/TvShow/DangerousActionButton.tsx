import React from "react";
import LoaderButton from "components/shared/LoaderButton";

export default function DangerousActionButton({
  handle,
  title
}: {
  handle: Function;
  title: string;
}) {
  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        onClick={handle}
      >
        {title}
      </LoaderButton>
    </div>
  );
}
