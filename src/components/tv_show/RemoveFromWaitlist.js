import React from "react";
import LoaderButton from "components/shared/LoaderButton";

export default function RemoveFromWaitlist({ handle, waitlist }) {
  if (!waitlist) return null;

  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        type="button"
        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        onClick={handle}
      >
        Remove from Waitlist
      </LoaderButton>
    </div>
  );
}
