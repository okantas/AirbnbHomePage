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
import Arrow from "../public/arrow.svg";

export default function navbar() {
  const navItems = [
    { id: 1, photo: Views, title: "Amazing Views" },
    { id: 2, photo: Lakefront, title: "Lakefront" },
    { id: 3, photo: Cave, title: "Caves" },
    { id: 4, photo: OMG, title: "OMG!" },
    { id: 5, photo: Earthhomes, title: "Earth homes" },
    { id: 6, photo: Treehouses, title: "Treehouses" },
    { id: 7, photo: Mansions, title: "Mansions" },
    { id: 8, photo: Cabins, title: "Cabins" },
    { id: 9, photo: AmazingPools, title: "Amazing Pools" },
    { id: 10, photo: Islands, title: "Islands" },
    { id: 11, photo: BeachFront, title: "Beachfront" },
    { id: 12, photo: Trending, title: "Trending" },
  ];
  return (
    <nav className="flex gap-8 items-center justify-center py-9">
      {navItems.map((items, index) => (
        <div key={index}>
          <a
            href="#"
            className="flex flex-col  justify-center items-center text-slate-500 px-1 py-3 gap-1 font-bold hover:border-solid hover:border-b hover:border-black hover:text-black transition-all duration-150 delay-100 ease-in-out"
          >
            <Image src={items.photo} alt="amazing views" />
            <p className="text-xs my-2">{items.title}</p>
          </a>
        </div>
      ))}
      <Image
        src={Arrow}
        alt="arrow"
        className="border-solid border-slate-500 border-2 rounded-3xl p-2 w-8 h-8 "
      />
    </nav>
  );
}
