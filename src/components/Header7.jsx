import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const features = [
  {
    icon: faCannabis,
    title: "Product Design",
    description:
      "Sea fruit there fourth Herb were fifth whales own open and lights whales Second above first won't void midst behold.",
  },
  {
    icon: faRandom,
    title: "Branding",
    description:
      "Very. That every image creeping. Said. Wherein under may multiply cattle seas his great won't air Hath good gathered Creeping.",
  },
  {
    icon: faCamera,
    title: "Photography",
    description:
      "Called life. Abundantly called signs air multiply creepeth. Under fruitful seed have. You'll, upon fourth whales void own made fruitful.",
  },
];

const FeatureItem = ({ feature }) => {
  return (
    <div className="rounded-[20px] bg-gray-200 relative p-6 pt-12 lg:p-12 ml-6 h-full">
      <div className="w-[74px] h-[74px] bg-white text-blue-600 rounded-full text-[32px] inline-flex items-center justify-center mb-6 absolute left-0 top-0 -m-6">
        <i className="fas fa-cannabis"></i>
        <FontAwesomeIcon icon={feature.icon} />
      </div>
      <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
      <p className="opacity-70">{feature.description}</p>
    </div>
  );
};

export default function Header7() {
  return (
    <section className="py-14 md:py-24 text-black">
      <div className="container px-4 mx-auto">
        <div className="flex-col items-center justify-center mb-12 text-center">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-[25px] md:text-[45px] leading-none font-bold mb-6">
              Our Features
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <p className="text-lg leading-6 mb-6">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-6 md:gap-x-6">
          {features.map((feature, i) => (
            <div className="col-span-12 md:col-span-4" key={i}>
              <FeatureItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
