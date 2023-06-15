import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Product", path: "/product" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
  ];
  return (
    <nav className="bg-purple-200 w-full  p-5 flex">
      <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-purple-200  md:flex justify-center w-full font-medium absolute duration-500 ease-in md:static ${
          open ? "top-6" : "top-[-1222px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
      <div>
        <input className="mr-30" type="text" placeholder="Search Bar" />
      </div>
    </nav>
  );
};

export default NavBar;
