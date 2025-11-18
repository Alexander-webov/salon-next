import React from "react";

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#422A3C] max-w-[780px] w-full text-center m-auto font-bold text-5xl">
      {children}
    </h2>
  );
}

export default Title;
