"use client";

import React from "react";

export default function Services({ reverse }: { reverse?: boolean }) {
  return (
    <div
      className={`lg:w-[90%] w-full max-w-full lg:h-[400px] h-auto flex items-center justify-between gap-4 flex-wrap ${
        reverse ? null : "flex-row-reverse"
      }`}
    >
      <div className="lg:w-[30%] md:w-[48%] w-full h-full flex items-center justify-center sm:justify-start">
        <div className="md:w-[80%] w-full sm:w-[50%]">
          <h2 className="lg:w-[70%] md:w-[80%] text-[40px] font-bold mb-2">
            Some texts
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            porro necessitatibus ipsa reiciendis illo quae maxime architecto
            sint harum dolores quia laboriosam nihil voluptates quibusdam odit
            placeat, quis sunt autem maiores eligendi distinctio? Suscipit,
            numquam facilis laudantium culpa similique maxime laborum eveniet
            unde veniam, quis nisi aliquam consequuntur nam ad.
          </p>
        </div>
      </div>
      <div className="bg-accent lg:w-[65%]  md:w-[48%] w-full min-h-[400px] h-full rounded-[35px] flex items-center justify-center"></div>
    </div>
  );
}
