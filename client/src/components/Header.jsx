import {
  HiOutlineShoppingBag,
  HiOutlineViewGrid,
  HiViewGrid,
} from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { LuPackageOpen } from "react-icons/lu";
import { ImSearch } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import womenFashion from "../assets/icons/women_fashion.png";
import menFashion from "../assets/icons/men_fashion.png";
import gadgetsElectronics from "../assets/icons/gadgets_electronics.png";
import homeLifestyle from "../assets/icons/home_lifestyle.png";
import sportsOutdoor from "../assets/icons/sports_outdoor.png";
import babysToys from "../assets/icons/babys_toys.png";
import groceriesPets from "../assets/icons/groceries_pets.png";
import healthBeauty from "../assets/icons/health_beauty.png";

const NavLinks = [
  { to: "", icon: <LuPackageOpen />, text: "Orders" },
  { to: "", icon: <AiOutlineHeart />, text: "Favorites" },
  { to: "", icon: <HiOutlineShoppingBag />, text: "Cart" },
];

const categories = [
  {
    name: "Woman's Fashion",
    description: "Get a better understanding of your traffic",
    to: "#",
    icon: womenFashion,
  },
  {
    name: "Men's Fashion",
    description: "Speak directly to your customers",
    to: "#",
    icon: menFashion,
  },
  {
    name: "Electronics",
    description: "Your customers’ data will be safe and secure",
    to: "#",
    icon: gadgetsElectronics,
  },
  {
    name: "Home & Lifestyle",
    description: "Connect with third-party tools",
    to: "#",
    icon: homeLifestyle,
  },
  {
    name: "Sports & Outdoor",
    description: "",
    to: "",
    icon: sportsOutdoor,
  },
  {
    name: "Baby's & Toys",
    description: "",
    to: "",
    icon: babysToys,
  },
  {
    name: "Groceris & Pets",
    description: "",
    to: "",
    icon: groceriesPets,
  },
  {
    name: "Health & Beauty",
    description: "",
    to: "",
    icon: healthBeauty,
  },
];

const CategoriesDropDown = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute top-12 right-2 md:-left-8 md:top-full z-10 mt-8 w-screen max-md:max-w-sm max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="p-4 md:grid grid-cols-2">
          {categories.map(({ name, description, to, icon }) => (
            <div
              key={name}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <img src={icon} alt="" />
              </div>
              <div className="flex-auto">
                <Link to={to} className="block font-semibold text-gray-900">
                  {name}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

const Header = () => {
  return (
    <header className="bg-white f-ic-jb px-4 lg:px-8 py-4 relative">
      <div className="flex items-center w-full mr-2 md:mr-6">
        <div className="mr-4 lg:mr-8">
          <Link to="/">
            <span className="font-extrabold text-xl">ADD</span>
          </Link>
        </div>
        <div className="f-ic-jb gap-2 w-full max-w-2xl">
          <div className="relative w-full">
            <input
              type="text"
              className="relative border-2 border-grey-500 py-1 lg:py-1.5 pl-4 pr-8 rounded-3xl w-full outline-none placeholder:text-xs"
              placeholder="What are you looking for?"
            />
            <ImSearch className="text-grey-500 absolute right-3 bottom-2.5 lg:bottom-3" />
          </div>
          <Popover.Group>
            <Popover className="md:relative">
              {({ open }) => (
                <>
                  <Popover.Button className="f-ic-jb gap-2 bg-gray-200 hover:bg-black hover:text-white outline-none text-black p-2 lg:px-4 rounded-full lg:rounded-3xl">
                    {open ? <HiViewGrid /> : <HiOutlineViewGrid />}
                    <span className="font-semibold hidden lg:block">
                      Categories
                    </span>
                  </Popover.Button>
                  <CategoriesDropDown />
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>
      <nav className="f-ic-jb gap-6 lg:gap-10">
        {NavLinks?.map(({ to, icon, text }) => (
          <NavLink to={to} key={text} className="f-ic-jb gap-2 max-md:hidden">
            <span className="text-xl">{icon}</span>
            <span className="font-semibold hidden lg:block">{text}</span>
          </NavLink>
        ))}
        <button className="py-1 lg:py-1.5 px-4 border border-black rounded-3xl font-semibold">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
