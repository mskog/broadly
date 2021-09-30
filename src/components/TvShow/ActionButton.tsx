import React from "react";
import LoaderButton from "components/shared/LoaderButton";

type ActionButtonProps = {
  handle: () => void;
  title: string;
};

export default function ActionButton({ handle, title }: ActionButtonProps) {
  return (
    <div className="w-full mx-1 my-2 md:w-6/12">
      <LoaderButton
        className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded hover:bg-teal-700"
        onClick={handle}
      >
        {title}
      </LoaderButton>
    </div>
  );
}
