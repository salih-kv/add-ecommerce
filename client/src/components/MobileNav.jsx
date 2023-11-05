import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavLinks = [
  { to: "/", icon: <AiFillHome />, text: "Home" },
  { to: "/orders", icon: <LuPackageOpen />, text: "Orders" },
  { to: "/favorites", icon: <AiOutlineHeart />, text: "Favorites" },
  { to: "/cart", icon: <HiOutlineShoppingBag />, text: "Cart" },
  { to: "/account", icon: <MdAccountCircle />, text: "Account" },
];

const MobileNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {NavLinks.map(({ to, icon, text }) => (
          <NavLink
            to={to}
            key={to}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group"
          >
            <span className="text-2xl text-gray-900 group-hover:text-white">
              {icon}
            </span>
            <span className="text-xs mt-1 text-gray-900 group-hover:text-white">
              {text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
