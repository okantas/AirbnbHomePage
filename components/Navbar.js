import React from "react";
import Image from "next/image";
import Views from "../public/amazingviews.svg";

export default function navbar() {
  return (
    <nav className="flex gap-8 items-center justify-center py-9">
      <div className="flex flex-col justify-center items-center gap-1 ">
        <Image src={Views} alt="amazing views" className="w-6 h-6" />
        <a>Amazing Views</a>
      </div>
    </nav>
  );
}
