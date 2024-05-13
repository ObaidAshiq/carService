import React from "react";
import baramulla from "@/public/Homepage/baramulla.jpg";
import gulmarg from "@/public/Homepage/gulmarg.jpg";
import pahalgham from "@/public/Homepage/pahalgham.jpg";
import jamiaMasjid from "@/public/Homepage/jamiaMasjid.jpg";
import ladakh from "@/public/Homepage/ladakh.jpg";
import tulipgarden from "@/public/Homepage/tulipgarden.jpg";
import Image from "next/image";

const data = [
  {
    name: "Tulip Garden",
    image: tulipgarden,
    description: null,
  },
  {
    name: "Gulmarg",
    image: gulmarg,
    description: null,
  },
  {
    name: "Ladakh",
    image: ladakh,
    description: null,
  },
  {
    name: "Pahalgham",
    image: pahalgham,
    description: null,
  },
];
const Enjoy = () => {
  return (
    <div className="sm:px-[10vw] mt-16">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl text-center font-extrabold text-gray-900 dark:text-white">
          ENJOY JAMMU AND KASHMIR
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-sm overflow-hidden shadow-sm">
            <Image src={baramulla} alt={"Baramulla"} />
            <div className="flex flex-col gap-3 p-3 mt-3">
              <h4 className="text-2xl ita font-extrabold text-gray-900 dark:text-white">
                Baramulla
              </h4>
              <p className="font-light text-gray-500 text-md dark:text-gray-400">
                Located in a beautiful valley, surrounded by lush greenery,
                passed by beautiful Jehlum river, has a great variety of flora
                and fauna, which has earned it its inclusion in the list of
                brautiful places.
              </p>

              <button className="bg-primary hover:text-primary hover:bg-white hover:drop-shadow-lg text-white px-6 py-2 rounded-full shadow-sm mt-6">
                Learn more
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 ">
            {data.map((place, index) => (
                <div key={place.name + index} className="aspect-video  px-3 sm:px-0 ">
              <div key={place.name + index} className="border flex flex-col justify-between rounded-lg overflow-hidden shadow-sm ">
                <Image src={place.image} alt={place.name}  objectFit="cover"/>
              </div>
                <h4 className=" mt-3 ">{place.name}</h4>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
