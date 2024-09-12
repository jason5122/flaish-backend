import React from "react";
import AuthenticatedUserHeader from "../headers/AuthenticatedUserHeader";

export default function AuthenticatedUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="w-full h-[8%]">
        <AuthenticatedUserHeader />
      </div>
      <main className="h-[90%]">{children}</main>
    </div>
  );
}
