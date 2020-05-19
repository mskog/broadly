import React from "react";
import LoaderButton from "components/shared/LoaderButton";

export default function Collect({ handle, collected, waitlist }) {
  if (collected || waitlist) return null;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        type="button"
        className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
        onClick={handle}
      >
        Collect
      </LoaderButton>
    </div>
  );
}
