import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgCardHearts } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
function Navbar() {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div
      className="flex justify-between items-center bg-[#004445] bg-gradient-to-b from-black h-24 
    max-w-[1240px] mx-auto px-4 text-white"
    >
      <div className="text-6xl w-full flex ">
        <CgCardHearts className="animate-pulse text-[#247881]" />
        <h1 className=" ">Bridge</h1>
      </div>
      <ul className="hidden md:flex">
        <NavLink className="p-4" to="/">
          AnaSayfa
        </NavLink>
        <NavLink className="p-4" to="/about">
          Hakkımızda
        </NavLink>
        <NavLink className="p-4" to="/">
          Blcok
        </NavLink>
      </ul>
      <div onClick={handleShow} className="md:hidden ">
        {show ? <CgMenu size={50} /> : <AiOutlineClose size={50} />}
      </div>

      <div
        className={
          !show
            ? "fixed left-0 top-0  bg-gradient-to-b from-black bg-[#004445] w-[70%] border-r border-r-gray-900 h-full ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <div className="w-full m-4 text-6xl  flex ">
          <CgCardHearts className="animate-pulse text-[#247881]" />
          <h1>Bridge</h1>
        </div>
        <ul className="uppercase text-4xl p-4">
          <NavLink className="p-4 block " to="/">
            AnaSayfa
          </NavLink>
          <NavLink className="p-4 block" to="/">
            Hakkımızda
          </NavLink>
          <NavLink className="p-4 block" to="/">
            Blcok
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
