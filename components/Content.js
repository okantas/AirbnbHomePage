import React from "react";
import Image from "next/image";
import Airbnb1 from "../public/airbnb1.svg";

export default function Content() {
  return (
    <main>
      <div className="flex flex-col gap-1 ">
        <Image src={Airbnb1} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Knoxville, Tennessee</h1>
        <p className=" text-sm">Mountain and lake views</p>
        <p className=" text-sm">Apr 16 - 21</p>
        <p className="font-bold text-sm">$388 night</p>
      </div>
    </main>
  );
}
