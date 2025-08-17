import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../Navbar/images/logo.png";
import profile from "../Navbar/images/profile.jpeg";
import { IoSearch } from "react-icons/io5";

const Navber = () => {
  return (
    <>
    <header className='fixed w-full z-10 top-0 '>
        <div className="flex justify-around items-center bg-[#bfbfbfc8] py-3">
            <div className="logo">
                <img src={logo} alt="" className='w-20'/>
            </div>
            <div className="navlinks">
                <ul className="flex justify-between item-center gap-8">
                    <li> <NavLink to="/" className='text-[18px] font-[600] text-[#E45352]'>Home</NavLink> </li>
                    <li> <NavLink to="/Events" className='text-[18px] font-[500]   hover:text-[#E45352] '>Events</NavLink> </li>
                    <li> <NavLink to="/About" className='text-[18px] font-[500]     hover:text-[#E45352] '>About us</NavLink> </li>
                    <li> <NavLink to="/News" className='text-[18px] font-[500]  hover:text-[#E45352] '>News</NavLink> </li>
                    <li> <NavLink to="/Contact" className='text-[18px] font-[500] hover:text-[#E45352] '>Contact Us</NavLink> </li>
                </ul>

            </div>
            <div className= ' flex items-center gap-2 w-96 border-2 border-[gray]  py-2 px-4 rounded-[30px]'>
               <IoSearch className='text-[20px] text-[gray] font-[600]' /> <input type="text"  placeholder="Search for player/organizer/Events" className='bg-[transparent] w-80 border-0 outline-0 placeholder:text-[#7A7A73]' />
            </div>
            <div className=" flex justify-center items-center gap-8">
                <h2 className="text-[16px] font-[700]">Welcome simth</h2>
                <img src={profile} alt="" className='w-16 h-16 rounded-[50%] border-2 border-[green]' />
            </div>
        </div>
    </header>
    </>
  )
}

export default Navber