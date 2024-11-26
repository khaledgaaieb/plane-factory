import React from "react";

export default function Header13() {
  return (
    <section className="p-14 md:py-24 bg-white text-zinc-900">
      <div className="container px-4">
        <div className="flex flex-col justify-center items-center mb-12">
          <div className="col-span-12 text-center sm:text-start">
            <h2 className="text-3xl leading-none font-bold md:text-[55px] md:leading-[70px]">
              Our Focus
            </h2>
            <p className="text-sm uppercase  sm:ml-6">
              We design &amp; develop quality products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 text-center md:text-start">
          {services.map((service, i) => (
            <div className="col-span-12 md:col-span-6 sm:pr-6 lg:pr-12" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const services = [
  {
    image:
      "https://cdn.easyfrontend.com/pictures/icons/easy-frontend-icon-monitor.png",
    title: "Web Design",
    description:
      "Divided days face. Us itself moveth. The second whales created hath you'll. Good a his seasons creepeth he grass, day day moveth dominion creature Appear is were Spirit be second.",
  },
  {
    image:
      "https://cdn.easyfrontend.com/pictures/icons/easy-frontend-icon-camera.png",
    title: "Photography",
    description:
      "From behold deep deep greater god Fourth. Together day, years multiply beginning fourth green good you'll, signs good. Set moveth meat rule multiply gathering evening together all god, day winged.",
  },
  {
    image:
      "https://cdn.easyfrontend.com/pictures/icons/easy-frontend-icon-openmail.png",
    title: "Email Marketing",
    description:
      "The. Give, fill called it sixth cattle earth night above you're she'd multiply, after herb fish darkness place made divide stars give Years open void upon Which, second likeness moved.",
  },
  {
    image:
      "https://cdn.easyfrontend.com/pictures/icons/easy-frontend-icon-check.png",
    title: "SEO & SMM",
    description:
      "Created cattle form fruit. Saying from given together face without waters, whose. Second first. Face it saw give creature was thing. Over upon is brought. Him you'll above kind set",
  },
];

const ServiceItem = ({ service }) => (
  <div>
    <div className="opacity-25">
      <img src={service.image} alt="Focus" width="100" />
    </div>
    <div className="relative">
      <h3 className="text-4xl leading-none -mt-4">{service.title}</h3>

      <p className="mb-0 mt-4 md:mt-6 text-[15px] leading-7 font-light tracking-wide">
        {service.description}
      </p>
    </div>
  </div>
);
