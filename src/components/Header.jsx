import React from "react";

export default function Header({ img }) {
  return (
    <section
      className="ezy__header29_LPJvEiEQ py-32 md:py-52 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url(https://cdn.easyfrontend.com/pictures/hero/hero_30.png)",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto flex justify-center items-center text-center">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-[62px] mb-2">
              We re offering Some useful Course Materials
            </h1>
            <p className="text-xl opacity-80 leading-snug px-12 py-6">
              Vitae bibendum egestas magna sit elit non. Netus volutpat
              dignissim pharetra felis. Orci commodo mauris adipiscing semper
              amet.
            </p>
            <div className="sm:max-w-lg mx-auto flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
