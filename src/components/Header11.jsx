import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header11() {
  return (
    <header className="py-14 md:py-24 bg-white text-[#373572]">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 text-center">
            <h2 className="text-2xl leading-none md:text-[70px] font-bold mb-6">
              Nice Workplace For storming Meetings
            </h2>
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <p className="text-[22px] leading-normal opacity-80 px-12 mb-12">
                  Egestas sed sed risus pretium quam vulputate dignissim
                  suspendisse in. Pharetra sit amet aliquam id diam maecenas
                  ultricies mi.
                </p>
              </div>
            </div>
            <a href="#!" className="px-8 py-4 bg-gray-500 rounded-md shadow text-xl">
              Try Now
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <p className="mt-8">No registration required</p>
          </div>
        </div>
      </div>
    </header>
  );
}
