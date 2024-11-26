import React from "react";

export default function Header8() {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900  relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[400px] lg:h-[600px]"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/portfolio/portfolio31.jpg)",
              }}
            ></div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center md:items-start justify-center">
            <div className="px-6 mt-12 lg:mt-0">
              <h1 className="text-3xl font-bold leading-tight md:text-[45px] capitalize mb-4">
                Living Blessed Saw That Called!
              </h1>
              <p className="text-lg opacity-80 leading-7 mb-6">
                Called moved beast rule unto greater so two dominion great him
                so night. Firmament for kind brought seas firmament earth them
                let beginning fourth two you are land. Called us gathered.
              </p>
              <button className="text-white bg-blue-600 py-3 px-6 rounded hover:bg-opacity-90">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
