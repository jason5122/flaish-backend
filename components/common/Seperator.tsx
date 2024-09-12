import Image from "next/image";
import React from "react";

export default function Separator({ top = true }: { top?: boolean }) {
  return (
    <div className="w-full h-full my-16 flex items-center justify-center">
      <div className="relative w-full flex items-center justify-center">
        {/* Separator Top SVG */}
        {top ? (
          <Image
            src="/assets/images/seperator_top.svg"
            alt="Separator Top SVG"
            title="Separator Top SVG"
            className="w-full"
            width={1078}
            height={5}
          />
        ) : (
          <Image
            src="/assets/images/seperator_bottom.svg"
            alt="Separator Top SVG"
            title="Separator Top SVG"
            className="w-full"
            width={1078}
            height={5}
          />
        )}

        {/* Straight Line SVG */}
        <Image
          src="/assets/images/straight_line.svg"
          alt="Straight Line SVG"
          title="Straight Line SVG"
          className={`absolute w-1/3 h-full ${top ? "top-0" : "bottom-0"} left-1/2 transform -translate-x-1/2`}
          width={1078} // Adjust the width as per your requirement
          height={5}
        />
      </div>
    </div>
  );
}
