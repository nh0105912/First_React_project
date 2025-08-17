import React from 'react'
import bg_image from '../Contact/images/bg_contact.jpeg';
import map from '../Contact/images/map.png'

// icons
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
const Contact = () => {
  return (
    <>
      <section className="bg-no-repeat bg-center bg-cover w-full h-[100vh] flex justify-center items-center flex-col" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bg_image})`,
        clipPath: `polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)`

      }}>
        <h2 className='text-[40px] text-white font-[700] py-4'>Contact Us</h2>
        <p className='text-white text-[20px] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, veniam voluptatum quasi totam iure aliquam, ea est similique ad modi laboriosam vero iste.</p>
        <button className='px-[20px] py-[10px] rounded-[30px] border-2 border-white mt-[40px] text-white capitalize font-[600] text-[20px]'>more info</button>
      </section>

      <section className="from flex justify-center gap-20 items-center py-[100px] ">
        <div className="">
          <h2 className='w-[600px] block text-[35px] capitalize font-[600] pb-12'>Send us Message now</h2>
          <input type="text" placeholder='Name' className='w-[600px] block border-[1px] border-black mt-4 py-2 rounded-[10px] px-4' />
          <input type="number" placeholder='Phone' className='w-[600px] block border-[1px] border-black mt-4 py-2 rounded-[10px] px-4' />
          <select className='w-[600px]  border-[1px] border-black mt-4 py-2 rounded-[10px] px-4' >
            <option value="Select City " disabled selected   > Select City </option>
            <option value="city 1">City 1</option>
            <option value="city 2">City 2</option>
            <option value="city 3">City 3</option>
          </select>
          <textarea name="" id="" className='w-[600px] h-52 block border-[1px] border-black mt-4 py-2 rounded-[10px] px-4'></textarea>
        </div >
        <div className="">
          <div className="flex items-start gap-3">
            <LuPhone   className="text-[20px] mt-1" />
            <div>
              <h1 className="text-[18px] capitalize font-[600]">Phone Number</h1>
              <p className="text-gray-600 text-[15px]">
                Lorem Ipsum fdbvxfgb cfgjhngcn
              </p>
            </div>
          </div>
          <br />
          <div className="flex items-start gap-3">
            <CiLocationOn className="text-[20px] mt-1" />
            <div>
              <h1 className="text-[18px] capitalize font-[600]">Location</h1>
              <p className="text-gray-600 text-[15px]">
                Lorem Ipsum fdbvxfgb cfgjhngcn
              </p>
            </div>
          </div>
           <div className="flex items-start gap-3 mt-4">
            <CgMail className="text-[20px] mt-1" />
            <div>
              <h1 className="text-[18px] capitalize font-[600]">Gmail Address</h1>
              <p className="text-gray-600 text-[15px]">
                Lorem Ipsum fdbvxfgb cfgjhngcn
              </p>
            </div>
          </div>

          <img src={map} alt="" className='w-[400px] h-80 rounded-[15px] mt-12' />
        </div>
      </section>

    </>
  )
}

export default Contact