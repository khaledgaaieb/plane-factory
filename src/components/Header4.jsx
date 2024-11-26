import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const serviceList = [
  {
    color: "red",
    icon: faCannabis,
    title: "Branding",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
  {
    color: "blue",
    icon: faRandom,
    title: "Content Marketing",
    description:
      "It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account",
  },
  {
    color: "yellow",
    icon: faCamera,
    title: "Web Development",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
];

const ServiceItem = ({ service }) => (
  <div className="bg-slate-800 h-full shadow-xl rounded-[20px] p-6 lg:px-6 lg:py-12">
    <div
      className={`w-24 h-24 rounded-full text-3xl inline-flex justify-center items-center mb-6 bg-${service.color}-600 bg-opacity-10 text-${service.color}-600`}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <h4 className="font-medium text-2xl mb-4">{service.title}</h4>
    <p className="opacity-80">{service.description}</p>
  </div>
);

export default function Header4() {
  return (
    <section className="m-14 rounded-lg p-14 md:py-24 bg-gray-200 text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6 text-black">
              Services We Provide
            </h2>
            <p className="text-lg opacity-80 text-black">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 text-center pt-12">
          {serviceList.map((service, i) => (
            <div className="col-span-12 md:col-span-4" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
