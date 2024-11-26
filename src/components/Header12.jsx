import React from "react";

export default function Header12() {
  return (
    <header className="p-14 md:py-18  text-[#373572] relative overflow-hidden">
      <div className="container px-4 relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-3xl leading-none md:text-7xl font-bold mb-6">
                Building a Better life with Packing.
              </h2>
              <p className="text-[22px] leading-normal opacity-80 mb-12">
                It s easier to reach your savings goals when you have the right
                savings account.
              </p>
              <div>
                <a
                  href="#!"
                  className="text-lg py-3 px-7 bg-white shadow rounded-lg"
                >
                  Try Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
            <img
              src="https://cdn.easyfrontend.com/pictures/hero/hero-1.png"
              alt=""
              className="rounded max-w-full h-auto mt-4"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
