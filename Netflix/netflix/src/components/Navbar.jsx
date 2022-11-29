import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContex";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user)
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">account</button>
          </Link>
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
              Logout
            </button>
          
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Login</button>
          </Link>
          <Link to="/singup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
