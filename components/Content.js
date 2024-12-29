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
import Airbnb9 from "../public/airbnb9.svg";
import Airbnb10 from "../public/airbnb10.svg";
import Airbnb11 from "../public/airbnb11.svg";
import Airbnb12 from "../public/airbnb12.svg";

export default function Content() {
  const cardsList = [
    {
      id: 1,
      photo: Airbnb1,
      location: "Knoxville, Tennessee",
      place: "Mountain and lake views",
      date: "Apr 16 - 21",
      price: "$388",
    },
    {
      id: 2,
      photo: Airbnb2,
      location: "Sevierville, Tennessee",
      place: "Mountain views",
      date: "Jun 5 – 10",
      price: "$343",
    },
    {
      id: 3,
      photo: Airbnb3,
      location: "Branson, Missouri",
      place: "Mountain views",
      date: "Apr 30 – May 5",
      price: "380",
    },
    {
      id: 4,
      photo: Airbnb4,
      location: "Chicago, Illinois",
      place: "City views",
      date: "Apr 4 – 9",
      price: "$326",
    },
    {
      id: 5,
      photo: Airbnb5,
      location: "Chicago, Illinois",
      place: "Lake and city views",
      date: "Mar 5 – 10",
      price: "$349",
    },
    {
      id: 6,
      photo: Airbnb6,
      location: "Sevierville, Tennessee",
      place: "Mountain and lake views",
      date: "Apr 16 - 21",
      price: "$255",
    },
    {
      id: 7,
      photo: Airbnb7,
      location: "Cassopolis, Michigan",
      place: "Lake views",
      date: "Mar 5 – 10",
      price: "$595",
    },
    {
      id: 8,
      photo: Airbnb8,
      location: "Tofte, Minnesota",
      place: "Beach and lake views",
      date: "Mar 19 – 24",
      price: "$170",
    },
    {
      id: 9,
      photo: Airbnb9,
      location: "Knoxville, Tennessee",
      place: "Mountain and lake views",
      date: "Apr 16 - 21",
      price: "$388",
    },
    {
      id: 10,
      photo: Airbnb10,
      location: "Sevierville, Tennessee",
      place: "Mountain views",
      date: "Jun 5 – 10",
      price: "$343",
    },
    {
      id: 11,
      photo: Airbnb11,
      location: "Branson, Missouri",
      place: "Mountain views",
      date: "Apr 30 – May 5",
      price: "380",
    },
    {
      id: 12,
      photo: Airbnb12,
      location: "Chicago, Illinois",
      place: "City views",
      date: "Apr 4 – 9",
      price: "$326",
    },
  ];

  return (
    <main className="mx-20 grid grid-cols-4 justify-center place-items-center max-w-full gap-6">
      {cardsList.map((items, index) => (
        <div key={index} className="cursor-pointer">
          <Image src={items.photo} alt="house image" className="mb-3" />
          <h1 className="font-bold text-sm">{items.location}</h1>
          <p className=" text-slate-500 text-sm">{items.place}</p>
          <p className="text-slate-500 text-sm">{items.date}</p>
          <p className="text-sm">
            <span className="font-bold">{items.price}</span> night
          </p>
        </div>
      ))}
    </main>
  );
}
