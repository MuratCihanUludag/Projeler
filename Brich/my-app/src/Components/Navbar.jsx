import React from "react";
import { NavLink } from "react-router-dom";
import { CgCardSpades } from "react-icons/cg";

function Navbar() {
  return (
    <div className=" shadow-md  w-full inline-block top-0 left-0 bg-green-700 text-white bg-gradient-to-r from-black">
      <div className="md:flex items-center justify-between p-4 md:px-10 px-7">
        <div className="font-bold  text-3xl flex items-center   ">
          <span className=" text-gray-500 animate-pulse text-4xl">
            <CgCardSpades />
          </span>
          <span className="italic ">Birdge</span>
        </div>
        <div className="md:flex md:items-center ">
          <NavLink
            className="md:ml-8 md:my-0 md-7 text-xl mr-3 p-3 hover:animate-pulse hover:border-b-2 focus:border-t-2 focus:border-b-2 rounded-3xl border-orange-500"
            to="/"
          >
            AnaSayfa
          </NavLink>
          <NavLink
            className=" md:ml-8 md:my-0 md-7 text-xl mr-3 p-3 hover:animate-pulse hover:border-b-2 focus:border-t-2 focus:border-b-2 rounded-3xl border-orange-500"
            to="/Contact"
          >
            iletişim{" "}
          </NavLink>
          <NavLink
            className=" md:ml-8 md:my-0 md-7 text-xl mr-3 p-3 hover:animate-pulse hover:border-b-2 focus:border-t-2 focus:border-b-2 rounded-3xl border-orange-500"
            to="/Blog"
          >
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
