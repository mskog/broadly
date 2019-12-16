import React from "react";

export default function Level({ children }) {
  return (
    <div className="flex flex-col justify-between text-white md:flex-row">
      {children}
    </div>
  );
}
