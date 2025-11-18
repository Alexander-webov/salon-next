import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1440px] w-full m-auto">{children}</div>;
}

export default Container;
