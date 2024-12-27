import React from "react";
import Image from "next/image";
import Form from "next/form";
import Logo from "../public/airbnb_logo.svg";
import Search from "../public/search_icon.svg";
import World from "../public/world_icon.svg";
import Options from "../public/threeline.svg";
import Profile from "../public/profile_icon.svg";

export default function Header() {
  return (
    <div className="flex justify-around py-5 h-1/6 items-center border-b-2">
      {/*first part*/}
      <nav>
        <Image src={Logo} alt="Airbnb" />
      </nav>
      {/*middle part*/}
      <nav className="flex gap-10  border-solid border-2 rounded-full py-3 px-4 items-center shadow-xl">
        <p className="text-sm font-bold">Anywhere</p>|
        <p className="text-sm font-bold">Any week</p>|
        <Form action="/search" className="flex gap-3">
          <input
            name="query"
            className="w-20 outline-none placeholder-sm placeholder:text-sm text-sm "
            placeholder="Add Guests"
          />
          <button
            type="submit"
            className="border-solid border-2  bg-pink-600 p-2 rounded-3xl"
          >
            <Image src={Search} alt="search" />
          </button>
        </Form>
      </nav>
      {/*last part*/}
      <nav className="flex gap-5 items-center">
        <p className="font-bold">Airbnb your home</p>
        <Image src={World} alt="connect" />
        <div className="flex border-solid border-slate-500 border-2 rounded-full gap-2 px-3 py-2">
          <Image src={Options} alt="options" />
          <Image src={Profile} alt="profile" />
        </div>
      </nav>
    </div>
  );
}
