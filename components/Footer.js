import React from "react";
import World from "../public/world_icon.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div>
        <p>© 2023 Airbnb, Inc.</p>
        <ul>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Privacy</li>
          <li>Your Privacy Choices</li>
        </ul>
      </div>
      <div>
        <Image src={World} alt="world" />
        <p>English (US)</p>
        <p>$ USD</p>
        <p>Support & resources</p>
      </div>
    </div>
  );
}
