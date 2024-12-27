import React from "react";
import Image from "next/image";
import Views from "../public/amazingviews.svg";
import Lakefront from "../public/lakefront.svg";
import Cave from "../public/cave.svg";
import OMG from "../public/OMG.svg";
import Earthhomes from "../public/earthhomes.svg";
import Treehouses from "../public/treehouses.svg";
import Mansions from "../public/mansion.svg";
import Cabins from "../public/cabin.svg";
import AmazingPools from "../public/amazingpools.svg";
import Islands from "../public/island.svg";
import BeachFront from "../public/beachfront.svg";
import Trending from "../public/trending.svg";

export default function navbar() {
  return (
    <nav className="flex gap-8 items-center justify-center py-9">
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Amazing Views</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Lakefront} alt="Lakefront" />
        <p className="text-xs my-2">Lakefront</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Cave} alt="Cave" />
        <p className="text-xs my-2">Caves</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={OMG} alt="OMG" />
        <p className="text-xs my-2">OMG!</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Earthhomes} alt="Earth homes" />
        <p className="text-xs my-2">Earth Homes</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Treehouses} alt="amazing views" />
        <p className="text-xs my-2">Treehouses</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Mansions} alt="Mansions" />
        <p className="text-xs my-2">Mansions</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Cabins} alt="cabins" />
        <p className="text-xs my-2">Cabins</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={AmazingPools} alt="amazing pools" />
        <p className="text-xs my-2">Amazing Pools</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Islands} alt="ısland" />
        <p className="text-xs my-2">Islands</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={BeachFront} alt="beachfront" />
        <p className="text-xs my-2">Beacfront</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Trending} alt="trending" />
        <p className="text-xs my-2">Trending</p>
      </a>
    </nav>
  );
}
