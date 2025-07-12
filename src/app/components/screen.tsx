import React from "react";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-[393px] h-[852px] bg-white shadow-lg overflow-auto">
        {children}
      </div>
    </div>
  );
}
