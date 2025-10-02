import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import logo from "../Navbar/images/logo.png";
import profile from "../Navbar/images/profile.jpeg";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { ImCross } from "react-icons/im";

const Navber = () => {
  let [open, setopen] = useState(false);
  const toggle = () => {
    {
      setopen((prev) => !prev);
    }
  };

  return (
    <>
      <header className="fixed w-full z-10 top-0">
        <div className="flex justify-around items-center  bg-[#bfbfbfc8] py-3 h-44 md:h-auto px-[10px] ">
          <div className="logo">
            <img src={logo} alt="" className="w-20" />
          </div>
          <div className="navlinks">
            <ul className=" hidden md:flex md:justify-between md:item-center gap-8">
              <li>
                {" "}
                <NavLink
                  to="/"
                  className="text-[18px] font-[600] text-[#E45352]"
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Events"
                  className="text-[18px] font-[500]   hover:text-[#E45352] "
                >
                  Events
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/About"
                  className="text-[18px] font-[500]     hover:text-[#E45352] "
                >
                  About us
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/News"
                  className="text-[18px] font-[500]  hover:text-[#E45352] "
                >
                  News
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="/Contact"
                  className="text-[18px] font-[500] hover:text-[#E45352] "
                >
                  Contact Us
                </NavLink>{" "}
              </li>
            </ul>
          </div>

          <div className="absolute bottom-0 md:static w-3/4 mt-2 flex items-center gap-2 md:w-96 border-[1px] border-[gray]  py-2 px-4 rounded-[30px]">
            <IoSearch className="text-[20px] text-[gray] font-[600]" />{" "}
            <input
              type="text"
              placeholder="Search for player/organizer/Events"
              className="bg-[transparent] w-80 border-0 outline-0 placeholder:text-[#7A7A73]"
            />
          </div>
          <div className=" flex justify-center items-center gap-4">
            <h2 className="md:text-[16px] font-[700] text-2xl">
              Welcome simth
            </h2>
            <img
              src={profile}
              alt=""
              className="w-16 h-16 rounded-[50%] border-2 border-[green]"
            />
          </div>
          <button onClick={toggle} className="md:hidden flex items-center" >
            {open ?  <ImCross/> :  <TfiMenu className="text-2xl" />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Navber;
