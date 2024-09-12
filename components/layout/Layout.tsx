import React from "react";
import Header from "../headers/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full h-[8%]">
        <Header />
      </div>
      <main className="h-[90%]">{children}</main>
    </div>
  );
}

export default Layout;
