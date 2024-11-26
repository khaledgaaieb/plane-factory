import React from "react";

export default function Header14() {
  return (
    <section className="md:py-24 bg-white  text-zinc-900 ">
      <div className="container px-4">
        <div className="grid grid-cols-12 mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <p className="mb-2">THIS IS WHAT WE DO</p>
            <h2 className="text-3xl leading-none md:text-[45px] font-bold">
              My Latest Works
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {portfolioList.map((portfolio, i) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 m-8 p-8 bg-gray-200 rounded-2xl"
              key={i}
            >
              <div className=" h-full rounded-[20px] flex flex-col">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="max-w-full h-auto w-full rounded-[20px]"
                />
                <div className="flex flex-col grow p-6 lg:p-12">
                  <div className="grow">
                    <h4 className="text-2xl font-medium mb-4">
                      {portfolio.title}
                    </h4>
                    <p className="opacity-50 mb-0">{portfolio.description}</p>
                  </div>

                  <div>
                    <button className="border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition duration-300 py-2 px-5 mt-6">
                      Marketing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const portfolioList = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
    title: "Web Portal Dev",
    description:
      "It’s easier to reach your savings goals when you have the right savings account. It’s easier to reach your savings goals when you have the right savings account.",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio4.jpg",
    title: "Photography",
    description:
      "Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim pharetra felis. Orci commodo mauris digital industry is booming adipiscing semper amet.",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio13.jpg",
    title: "Marketing",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
];
