import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import NavLink from "./NavLink";

function Navbar({active}) {
  return (
    <div className="flex md:justify-between justify-center px-2 md:px-4  py-4 items-center">
      <div className="text-xl hidden md:block">
        <h1>Realestate</h1>
      </div>

      <div className="flex justify-center cursor-pointer">
        <NavLink active={active === 0? true:false}>
            <h1>Search</h1>
        </NavLink>
        <NavLink active={active === 1? true:false}>
            <h1>About</h1>
        </NavLink>
        <NavLink active={active === 2? true:false}>
            <h1>Help</h1>
        </NavLink>
        <div className="hidden lg:block">

          <NavLink active={active === 3? true:false}>
              <h1>Real Estate Agents</h1>
          </NavLink>
        </div>
        <NavLink active={active === 4? true:false}>
            <h1>Blog</h1>
        </NavLink>
      </div>
      <div className="hidden md:flex justify-between items-center ">
        <div className="opacity-50">
          <BsFillSuitHeartFill />
        </div>
        <div className="rounded-full h-8 w-8 bg-gray-400 ml-8"></div>
      </div>
    </div>
  );
}

export default Navbar;
