import { Link } from "react-router-dom";

const routes = [
  { name: "AirCraft", href:"/air-craft", isActive: false },
  { name: "About us", href: "/about-us", isActive: false },
  { name: "Careers", href: "/careers", isActive: false },
  { name: "News", href: "/news", isActive: false },
  { name: "Contact", href: "/contact", isActive: false },
];

const NavMenu = ({ routes }) => (
  <ul
    className="flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent"
    id="navbar"
  >
    {routes.map((route, i) => (
      <li key={i}>
        <Link
          className={`px-4 ${
            route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
          }`}
          to={route.href}
        >
          {route.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default function NavBar() {
  return (
    <div className=" py-6 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
      <nav>
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <Link className="font-black text-3xl ml-5" to={"/"}>
              {" "}
              Easy Frontend{" "}
            </Link>
            <button
              className="block lg:hidden cursor-pointer h-10 z-20"
              type="button"
              id="hamburger"
            >
              <div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2" />
              <div className="h-0.5 w-7 bg-black dark:bg-white" />
              <div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2" />
            </button>
            <NavMenu routes={routes} />
          </div>
        </div>
      </nav>
    </div>
  );
}
