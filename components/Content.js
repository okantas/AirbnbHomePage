import React from "react";
import Image from "next/image";
import Airbnb1 from "../public/airbnb1.svg";
import Airbnb2 from "../public/airbnb2.svg";
import Airbnb3 from "../public/airbnb3.svg";
import Airbnb4 from "../public/airbnb4.svg";
import Airbnb5 from "../public/airbnb5.svg";
import Airbnb6 from "../public/airbnb6.svg";
import Airbnb7 from "../public/airbnb7.svg";
import Airbnb8 from "../public/airbnb8.svg";

export default function Content() {
  return (
    <main className="mx-20 grid grid-cols-4 justify-center place-items-center max-w-full gap-6">
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb1} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Knoxville, Tennessee</h1>
        <p className=" text-slate-500 text-sm">Mountain and lake views</p>
        <p className="text-slate-500 text-sm">Apr 16 - 21</p>
        <p className="text-sm">
          <span className="font-bold">$388</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb2} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Sevierville, Tennessee</h1>
        <p className=" text-slate-500 text-sm">Mountain views</p>
        <p className="text-slate-500 text-sm">Jun 5 – 10</p>
        <p className="text-sm">
          <span className="font-bold">$343</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb3} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Branson, Missouri</h1>
        <p className=" text-slate-500 text-sm">Mountain views</p>
        <p className="text-slate-500 text-sm">Apr 30 – May 5</p>
        <p className="text-sm">
          <span className="font-bold">$380</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb4} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Chicago, Illinois</h1>
        <p className=" text-slate-500 text-sm">City views</p>
        <p className="text-slate-500 text-sm">Apr 4 – 9</p>
        <p className="text-sm">
          <span className="font-bold">$326</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb5} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Chicago, Illinois</h1>
        <p className=" text-slate-500 text-sm">Lake and city views</p>
        <p className="text-slate-500 text-sm">Mar 5 – 10</p>
        <p className="text-sm">
          <span className="font-bold">$349</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb6} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Sevierville, Tennessee</h1>
        <p className=" text-slate-500 text-sm">Mountain and lake views</p>
        <p className="text-slate-500 text-sm">Apr 16 - 21</p>
        <p className="text-sm">
          <span className="font-bold">$255</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb7} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Cassopolis, Michigan</h1>
        <p className=" text-slate-500 text-sm">Lake views</p>
        <p className="text-slate-500 text-sm">Mar 5 – 10</p>
        <p className="text-sm">
          <span className="font-bold">$595</span> night
        </p>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer ">
        <Image src={Airbnb8} alt="First image" className="mb-3" />
        <h1 className="font-bold text-sm">Tofte, Minnesota</h1>
        <p className=" text-slate-500 text-sm">Beach and lake views</p>
        <p className="text-slate-500 text-sm">Mar 19 – 24</p>
        <p className="text-sm">
          <span className="font-bold">$170</span> night
        </p>
      </div>
    </main>
  );
}
