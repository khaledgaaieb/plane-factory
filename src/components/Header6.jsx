import React from "react";
const cards = [
  {
    title: "Legal Customers",
    desc: "Lorem ipsum dolor sit amet fugiat magnam adipisci officiis iste delectus quasi.",
  },
  {
    title: "Satisfied Customers",
    desc: "Lorem ipsum dolor sit amet fugiat magnam adipisci officiis iste delectus quasi.",
  },
  {
    title: "Sponsored Brands",
    desc: "Lorem ipsum dolor sit amet fugiat magnam adipisci officiis iste delectus quasi.",
  },
  {
    title: "Positive Reviews",
    desc: "Lorem ipsum dolor sit amet fugiat magnam adipisci officiis iste delectus quasi.",
  },
];

const CardItem = ({ item, index }) => (
  <div className="bg-blue-600 bg-opacity-10 rounded-xl transition duration-300 hover:bg-opacity-20 hover:rotate-2 hover:scale-105 hover:shadow-lg p-6 lg:p-12">
    <h2 className="font-bold text-3xl md:text-[55px] leading-none text-blue-600 mb-4">
      {`${index < 10 ? "0" + index : index}`}
    </h2>
    <h4 className="font-medium text-2xl mb-2">{item.title}</h4>
    <p className="mt-2 opacity-75">{item.desc}</p>
  </div>
);

export default function Header6() {
  return (
    <div className=" px-4">
      <div className="flex flex-wrap justify-center p-16 gap-8">
        {cards.map((item, i) => (
          <div
            className={`col-span-12 md:col-span-5 md:col-start-${
              i % 2 === 1 ? "7" : "2"
            }`}
            key={i}
          >
            <CardItem item={item} index={i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
