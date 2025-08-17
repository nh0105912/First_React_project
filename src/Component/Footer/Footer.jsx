import React from 'react'
import Footerlogo from '../Footer/images/logo.png';
import insta from '../Footer/images/insta.png';

// icons 
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#E5E5E5] h-[40vh] flex justify-center items-center gap-16">
                <h1 className='text-[35px] font-[700] text-[#E45252]'>Newsletter Subscribe</h1>
                <div className=" rounded-[10px] bg-white ">
                <input type="search" placeholder='Enter your Email' className='border-none outline-none bg-transparent w-72 py-2 px-4' />
                <button className='bg-[#E45252] py-2 px-4 text-white text-[20px] capitalize'>Subcribe</button>
                </div>
            </div>
            <div className="bg-[#E45252] w-full h-[60vh] flex justify-around items-center ">
                <div className="logo">
                    <img src={Footerlogo} alt="" className='w-36 h-36 rounded-[10px] bg-white'/>

                </div>
                <div className="">
                    
                        <ul className='flex justify-evenly items-center gap-8 py-[20px]'>
                            <li><a href="#" className='text-white text-[20px] font-[600]'>Home</a></li>
                            <li><a href="#" className='text-white text-[20px] font-[600]'>Events</a></li>
                            <li><a href="#" className='text-white text-[20px] font-[600]'>About us</a></li>
                            <li><a href="#" className='text-white text-[20px] font-[600]'>News</a></li>
                            <li><a href="#" className='text-white text-[20px] font-[600]'>Contact us</a></li>
                        </ul>

                    
                    <div className="social flex justify-center gap-8 items-center py-[20px]">
                        <img src={insta} alt="" className='w-8 h-8 p-[1.5px]  bg-white rounded-[5px] hover:bg-[blue] hover:text-white' />
                        <FaLinkedinIn className='w-8 h-8 p-[1.5px]  bg-white rounded-[5px] text-[blue] hover:bg-[blue] hover:text-white' />
                        <FaFacebookF className='w-8 h-8 p-[1.5px]  bg-white rounded-[5px] text-[blue] hover:bg-[blue] hover:text-white' />
                        <FaTwitter className='w-8 h-8 p-[1.5px]  bg-white rounded-[5px] text-[blue] hover:bg-[blue] hover:text-white' />
                    </div>
                    <div className="">
                       <p className='text-center text-white font-[600] text-[23px]'>Email:support@DSP.co</p>
                    </div>
                </div>
                <div className="">
                  <button className='bg-white px-12 py-2 text-[20px] font-[600] rounded-[30px] capitalize'>signup</button>
                </div>
            </div>
        </>
    )
}

export default Footer