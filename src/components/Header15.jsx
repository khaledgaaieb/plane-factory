import React from "react";

export default function Header15() {
  return (
    <header
      className="ezy__header33_ajVsn3PM bg-cover bg-right bg-no-repeat text-white relative flex justify-center items-center py-40 md:py-48 z-[1]"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/hero/header33-bg.jpg)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
        style={{
          background:
            "linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
        }}
      ></div>
      <div className="container px-14">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
            <h2 className="text-[32px] leading-snug md:text-8xl font-bold tracking-wider mb-6">
              The Desert is my DNA
            </h2>
            <p className="text-lg leading-relaxed mb-12 md:mr-32 lg:mr-52">
              An activity that requires a person s mental or physical effort is
              work.If a person is trained for a certain type of job, they may
              have a job or profession which suits.
            </p>
            <div className="md:mr-40 lg:mr-72">
              <button className="py-4 px-8 text-bold bg-white text-black font-bold hover:bg-opacity-80 rounded-full w-full">
                Know More about us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
