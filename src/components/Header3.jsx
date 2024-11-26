
 function FeatureItem({ feature }) {
  return (
    <div className="rounded-[20px] bg-gray-200 relative p-6 pt-12 lg:p-12 ml-6 h-full">
      <img src={feature.img} alt="" />
      <div className="flex flex-col items-center text-center mt-5">
        <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
        <p className="opacity-70">{feature.desc}</p>
      </div>
    </div>
  );
}

const features = [
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
    title: "Product Design",
    desc: "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
    title: "Branding",
    desc: "Man our from light they're cattle upon created female. You first land evening beast won't had bring first void meat.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
    title: "Photography",
    desc: "Bearing bearing form night spirit, for signs isn't, tree fourth i there two land deep man without seasons fill itself.",
  },
];
export default function Header3() {
  return (
    <section className=" py-14 md:py-24 text-black">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-center items-center text-center mb-12">
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
