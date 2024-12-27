import React from "react";
import Image from "next/image";
import Views from "../public/amazingviews.svg";

export default function navbar() {
  return (
    <nav className="flex gap-8 items-center justify-center py-9">
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Amazing Views</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Lakefront</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Caves</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">OMG!</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Earth Homes</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Treehouses</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Mansions</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Cabins</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Amazing Pools</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Islands</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Beacfront</p>
      </a>
      <a
        href="#"
        className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 hover:font-bold hover:border-solid hover:border-b-2 hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
      >
        <Image src={Views} alt="amazing views" />
        <p className="text-xs my-2">Trending</p>
      </a>
    </nav>
  );
}
