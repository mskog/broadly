import React from "react";

export default function Level({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-around text-white md:flex-row">
      {children}
    </div>
  );
}
