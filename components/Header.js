import React from "react";
import Image from "next/image";
import Form from "next/form";
import Logo from "../public/airbnb_logo.svg";
import Search from "../public/search_icon.svg";

export default function Header() {
  return (
    <div className="flex">
      {/*first part*/}
      <nav>
        <Image src={Logo} alt="Airbnb" />
      </nav>
      {/*middle part*/}
      <nav className="flex">
        <p>Anywhere</p>
        <p>Any week</p>
        <Form action="/search">
          <input
            name="query"
            className="w-16 outline-none"
            placeholder="Add Guests"
          />
          <button
            type="submit"
            className="border-solid border-2 border-black bg-pink-600 p-2 rounded-3xl"
          >
            <Image src={Search} alt="search" />
          </button>
        </Form>
      </nav>
      {/*second part*/}
      <nav></nav>
    </div>
  );
}
