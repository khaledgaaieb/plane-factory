/* eslint-disable react/no-unknown-property */
import React from "react";

export default function Header10() {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
              Meet Our Clients & Partners
            </h2>
            <p className="text-lg leading-6 opacity-70">
              Create amazing carousel to display your client or partner logos
              with extensive design controls.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center text-center gap-4">
          {clientLogos.map((client, i) => (
            <div
              className="bg-slate-100  rounded-lg p-6 lg:p-12"
              key={i}
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="max-h-12 max-w-full h-auto"
              />
            </div>
          ))}
        </div>
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
