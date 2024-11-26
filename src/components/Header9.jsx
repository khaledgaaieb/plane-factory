/* eslint-disable react/no-unknown-property */
import React from "react";

export default function Header9() {
  return (
    <section className="md:py-24 bg-white  text-zinc-900 ">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-2">
            Meet Our Clients & Partners
          </h2>
        </div>
        <marquee behavior="scroll" direction="left" loop>
          <div className="flex justify-center items-center text-center">
            {clientLogos.map((client, i) => (
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-12 img-fluid px-12 my-6"
                key={i}
              />
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
}
const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "",
  },
];
