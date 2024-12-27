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
    <div className="flex justify-around py-8">
      {/*first part*/}
      <nav>
        <Image src={Logo} alt="Airbnb" />
      </nav>
      {/*middle part*/}
      <nav className="flex gap-10  border-solid border-2 border-black rounded-full py-3 px-4 items-center">
        <p className="text-sm">Anywhere</p>|<p className="text-sm">Any week</p>|
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
      <nav className="flex">
        <p>Airbnb your home</p>
        <Image src={World} alt="connect" />
        <div className="flex">
          <Image src={Options} alt="options" />
          <Image src={Profile} alt="profile" />
        </div>
      </nav>
    </div>
  );
}
