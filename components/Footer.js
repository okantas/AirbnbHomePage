import React from "react";
import World from "../public/world_icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex  text-sm place-items-center justify-around py-4 border-t-2 mt-5 ">
      <div className="flex gap-4">
        <p>© 2023 Airbnb, Inc.</p>
        <ul className="flex gap-4 ">
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Privacy</li>
          <li>Your Privacy Choices</li>
        </ul>
      </div>
      <div className="flex place-items-center gap-4">
        <p className="flex place-items-center">
          <Image src={World} alt="world" />
          English (US)
        </p>
        <p>$ USD</p>
        <p>Support & resources</p>
      </div>
    </div>
  );
}
