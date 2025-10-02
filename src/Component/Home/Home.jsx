import React from 'react'
import '../Style/Home.css';


// icons import 
import { FaToggleOff } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

// images import
import cycling from '../Home/images/Cycling-Event.jpeg';
import Event from "../Home/images/Event-Hire.jpeg";
import sport from "../Home/images/Sport-Event.jpeg";
import Featured_bg from '../Home/images/Featured_bg.jpeg';
import player from '../Home/images/player.jpeg';
import award from "../Home/images/Award.png";
import trending1 from '../Home/images/trending1.jpeg';
import trending2 from '../Home/images/trending-2.jpeg';
import trending3 from '../Home/images/trending3.jpeg';
import trending4 from '../Home/images/trending-4.jpeg';
import trending5 from '../Home/images/trending5.jpeg';
import trending6 from '../Home/images/gaming2.png';
import benefit1 from '../Home/images/benefit1.jpeg';
import benefit2 from '../Home/images/benefit2.png';
import benefit3 from '../Home/images/benefit3.png';
import benefit4 from '../Home/images/benefit4.jpeg';
import benefit5 from '../Home/images/benefit5.jpeg';

import client1 from '../Home/images/client1.jpeg';
import client2 from '../Home/images/client2.jpeg';
import client3 from '../Home/images/client3.jpeg';

import work1 from "../Home/images/work1.jpeg";
import work2 from "../Home/images/work2.jpeg";
import work3 from "../Home/images/work3.jpeg";

import fantasy from '../Home/images/Fantasy_bg.jpeg';

const Home = () => {
    return (
        <>

            <section className="hero " >

                <div className="top flex justify-between items-start px-20 pt-32">
                    <div className="flex justify-between items-center gap-8">
                        <p className='text-white text-[20px]'>Switch To Player</p>
                        <a href="#"> <FaToggleOff className='text-[35px] text-[red] ' />  </a>
                        <p className='text-white text-[18px]'>Switch To Organizer</p>
                    </div>
                    <div className="">
                        <button className=' bg-[green] px-6 py-2 rounded-[30px] text-[20px]  text-white'>Boost Your Profile</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-20">

                    <h1 className='text-[60px] font-[700] text-white pb-4 '>Event Management</h1>
                    <p className='text-white w-2/4 text-center pb-4 text-[18px]'>Lorem ipsum dolor sit amet consectetur. Nibh mauris sed quam nunc magna et diam.
                        Egestas nibh proin metus vitae aliquam mauris at.</p>
                    <div className=" flex justify-between  gap-12 pt-4">
                        <button className='bg-[#E43636] px-4 py-2 rounded-[30px] text-white '>All Events </button>
                        <button className='border-2 border-white px-4 py-2 rounded-[30px] text-white '> more Info </button>
                        <button className='bg-[#E43636]  px-4 py-2 rounded-[30px] text-white flex items-center gap-4'> Get a quote <FaArrowRight />  </button>
                    </div>
                </div>
            </section>

            <section className="flex w-[80%] mx-auto translate-y-[-60%] rounded-[20px] overflow-hidden border border-red-500">

                <div className="flex flex-col items-center justify-center flex-1 bg-[#3D3D3D] text-white py-8 px-6 border-r border-red-500">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-red-500 text-2xl mb-4">
                        <IoCloudDownloadOutline />
                    </div>
                    <h3 className="font-[800]">Super Fast</h3>
                    <p className="text-[18px]">Instant Digital Download</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 bg-[#3D3D3D] text-white py-8 px-6 border-r border-red-500">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-red-500 text-2xl mb-4">
                        <AiOutlineSafety />
                    </div>
                    <h3 className="font-[800]">Reliable & Safe</h3>
                    <p className="text-[18px]">Over 10,000 games</p>
                </div>
                <div className="flex flex-col items-center justify-center flex-1 bg-[#3D3D3D] text-white py-8 px-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-red-500 text-2xl mb-4">
                        <LuMessageCircleMore />
                    </div>
                    <h3 className="font-[800]">Customer Support</h3>
                    <p className="text-[18px]">Human support 24/7</p>
                </div>
            </section>

            <section className="">
                <a href="#" className='flex justify-center items-center gap-8 underline text-[23px] text-[red] capitalize'>View all organizers and players <FaArrowRight /> </a>
                <h1 className='text-center text-[40px] font-[600] capitalize pb-4'>Welcome on One Click Arena</h1>
                <p className='text-center w-[60%] mx-auto pb-4 text-[18px]'>Elite event management is an industry leader in sports event management delivery, operations and logistics</p>
                <p className='text-center w-[60%] mx-auto pb-4 text-[18px]'>We set the standards in the industry for mass participation cycle events, adventure races and corporate cycling experiences. We pride ourselves on producing safe and technically excellent events in iconic locations.</p>
            </section>

            <section className="mt-[20px] h-[80vh] pt-">
                <div className="flex justify-evenly  ">
                    <div className="w-[333px] h-[352px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${cycling})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className="px-[20px] py-[10px]  bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[333px] h-[352px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[333px]  h-[352px] bg-no-repeat bg-cover bg-center  rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Event})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                </div>
            </section>

            <section className="featured pt-[50px]">
                <div className="w-[100vw]  h-[100vh] z-[-2]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Featured_bg})`,
                        clipPath: ` polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)`,

                    }}
                >
                    <h2 className='text-white text-center capitalize text-[35px] font-[600] py-[20px]'>Featured </h2>
                    <div className="flex justify-between items-center border-b-2 border-white mx-[150px] pt-8">
                        <p className='text-white py-2 text-[20px] font-[600] capitalize'>player</p>
                        <p className='text-white py-2 text-[20px] font-[600] capitalize'>organizers</p>
                        <p className='text-white py-2 text-[20px] font-[600] capitalize'>Events</p>
                    </div>

                    <div className="pt-[50px]  flex justify-center gap-4 items-center w-[100%]">
                        <div className="border-2 border-[red] rounded-[10px] w-[300px] h-[320px] bg-[#0f0f0fc1]">
                            <img src={player} alt="" className='w-28 h-28 rounded-[50%] border-2 border-[red] mx-auto mt-[30px] ' />
                            <div className="flex justify-center items-center gap-2 py-[20px]">
                                <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-white' />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <img src={award} alt="" className='w-4' />
                                <h2 className='text-white text-[18px] capitalize font-[600]'>sara ali</h2>
                            </div>
                            <p className='text-white text-center text-[16px] py-2 capitalize'>sport preference:Football</p>
                            <div className="flex justify-center items-center gap-2">
                                <CiLocationOn className='text-white text-[20px]' />
                                <p className='text-white text-[16px] capitalize'>abu dhabi UAE</p>

                            </div>

                        </div>
                        <div className="border-2 border-[red] rounded-[10px] w-[300px] h-[320px] bg-[#0f0f0fc1]">
                            <img src={player} alt="" className='w-28 h-28 rounded-[50%] border-2 border-[red] mx-auto mt-[30px] ' />
                            <div className="flex justify-center items-center gap-2 py-[20px]">
                                <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-white' />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <img src={award} alt="" className='w-4' />
                                <h2 className='text-white text-[18px] capitalize font-[600]'>sara ali</h2>
                            </div>
                            <p className='text-white text-center text-[16px] py-2 capitalize'>sport preference:Football</p>
                            <div className="flex justify-center items-center gap-2">
                                <CiLocationOn className='text-white text-[20px]' />
                                <p className='text-white text-[16px] capitalize'>abu dhabi UAE</p>

                            </div>

                        </div>
                        <div className="border-2 border-[red] rounded-[10px] w-[300px] h-[320px] bg-[#0f0f0fc1]">
                            <img src={player} alt="" className='w-28 h-28 rounded-[50%] border-2 border-[red] mx-auto mt-[30px] ' />
                            <div className="flex justify-center items-center gap-2 py-[20px]">
                                <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-white' />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <img src={award} alt="" className='w-4' />
                                <h2 className='text-white text-[18px] capitalize font-[600]'>sara ali</h2>
                            </div>
                            <p className='text-white text-center text-[16px] py-2 capitalize'>sport preference:Football</p>
                            <div className="flex justify-center items-center gap-2">
                                <CiLocationOn className='text-white text-[20px]' />
                                <p className='text-white text-[16px] capitalize'>abu dhabi UAE</p>

                            </div>

                        </div>
                        <div className="border-2 border-[red] rounded-[10px] w-[300px] h-[320px] bg-[#0f0f0fc1]">
                            <img src={player} alt="" className='w-28 h-28 rounded-[50%] border-2 border-[red] mx-auto mt-[30px] ' />
                            <div className="flex justify-center items-center gap-2 py-[20px]">
                                <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-white' />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <img src={award} alt="" className='w-4' />
                                <h2 className='text-white text-[18px] capitalize font-[600]'>sara ali</h2>
                            </div>
                            <p className='text-white text-center text-[16px] py-2 capitalize'>sport preference:Football</p>
                            <div className="flex justify-center items-center gap-2">
                                <CiLocationOn className='text-white text-[20px]' />
                                <p className='text-white text-[16px] capitalize'>abu dhabi UAE</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[50px]">
                <h2 className='text-center text-[35px] font-[600] capitalize'>Trending</h2>
                <div className="flex justify-evenly items-center gap-8 flex-wrap px-[100px] pt-[50px]">
                    <div className="flex flex-col">
                        <img src={trending1} alt="" className="w-[300px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending2} alt="" className="w-[300px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending3} alt="" className="w-[300px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending4} alt="" className="w-[300px] h-[200px] rounded-[10px] " />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending5} alt="" className="w-[300px] h-[200px] rounded-[10px] " />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending6} alt="" className="w-[300px] h-[200px] rounded-[10px] " />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-[20px] h-[80vh] bg-[#e45352] rounded-[10px]">
                <h1 className="text-center text-white capitalize text-[40px] font-[600] py-8">Benefits</h1>
                <div className="main flex justify-evenly items-center gap-4">
                    <div className="sub w-[230px] h-[330px] bg-white  rounded-[10px]">
                        <img src={benefit1} alt="" className='w-[100%] h-[130px]' />
                        <h3 className='px-[10px] text-[20px] font-[700] text-[#e45352] py-[5px] capitalize'>Event registration</h3>
                        <p className='px-[10px] font-bold'>sign for the exlusive event</p>
                        <p className='px-[10px] text-[16px]'>Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>

                    </div>
                    <div className="sub w-[230px] h-[330px] bg-white  rounded-[10px]">
                        <img src={benefit2} alt="" className='w-[100%] h-[130px]' />
                        <h3 className='px-[10px] text-[20px] font-[700] text-[#e45352] py-[5px] capitalize'>Event registration</h3>
                        <p className='px-[10px] font-bold'>sign for the exlusive event</p>
                        <p className='px-[10px] text-[16px]'>Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>

                    </div>
                    <div className="sub w-[230px] h-[330px] bg-white rounded-[10px]">
                        <img src={benefit3} alt="" className='w-[100%] h-[130px]' />
                        <h3 className='px-[10px] text-[20px] font-[700] text-[#e45352] py-[5px] capitalize'>Event registration</h3>
                        <p className='px-[10px] font-bold'>sign for the exlusive event</p>
                        <p className='px-[10px] text-[16px]'>Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>


                    </div>
                    <div className="sub w-[230px] h-[330px] bg-white rounded-[10px]">
                        <img src={benefit4} alt="" className='w-[100%] h-[130px]' />
                        <h3 className='px-[10px] text-[20px] font-[700] text-[#e45352] py-[5px] capitalize'>Event registration</h3>
                        <p className='px-[10px] font-bold'>sign for the exlusive event</p>
                        <p className='px-[10px] text-[16px]'>Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>


                    </div>
                    <div className="sub w-[230px] h-[330px] bg-white rounded-[10px]">
                        <img src={benefit5} alt="" className='w-[100%] h-[130px]' />
                        <h3 className='px-[10px] text-[20px] font-[700] text-[#e45352] py-[5px] capitalize'>Event registration</h3>
                        <p className='px-[10px] font-bold'>sign for the exlusive event</p>
                        <p className='px-[10px] text-[16px]'>Easily browse and register for upcoming events. Get instant confirmation and event details. Never miss out on exciting opportunities.</p>


                    </div>
                </div>

            </section>

            <section className="review py-[50px]">
                <h1 className="text-center capitalize text-[40px] font-[700]">Client reviews </h1>
                <p className='w-[60%] mx-auto text-[18px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt voluptate blanditiis alias doloribus velit optio cupiditate voluptatibus culpa omnis.</p>
                <div className="flex justify-around items-center  h-[70vh]">
                    <div className="w-[337px] h-[317px] border-[1px] border-black rounded-[10px] mx-auto pt-[20px]">
                        <img src={client1} alt="" className='w-28 h-28  border-2 border-[red] rounded-[50%] mx-auto  ' />
                        <h1 className='text-center py-[5px] font-[700] text-[20px] capitalize text-[red] '>shaun cobb</h1>

                        <div className="flex justify-center  py-[5px]">
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' />
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' />
                        </div>
                        <p className='px-[20px] text-[15px]  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos soluta perferendis aut officia in dolores ullam reprehenderit ea tempore repudiandae!</p>

                    </div>
                    <div className="w-[337px] h-[317px] border-[1px] border-black translate-y-[50px] rounded-[10px] bg-[#e45352] pt-[20px]">
                        <img src={client2} alt="" className='w-28 h-28  border-2 border-black rounded-[50%] mx-auto ' />
                        <h1 className='text-center py-[10px] font-[700] text-[20px] capitalize text-white '>shaun cobb</h1>

                        <div className="flex justify-center  py-[5px]">
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' />
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' />
                        </div>
                        <p className='px-[20px] text-[15px] text-white text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos soluta perferendis aut officia in dolores ullam reprehenderit ea tempore repudiandae!</p>

                    </div>
                    <div className="w-[337px] h-[317px] border-[1px] border-black rounded-[10px] mx-auto pt-[2px]">
                        <img src={client3} alt="" className='w-28 h-28  border-2 border-[red] rounded-[50%] mx-auto  ' />
                        <h1 className='text-center py-[10px] font-[700] text-[20px] capitalize text-[red] '>shaun cobb</h1>

                        <div className="flex justify-center  py-[5px]">
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' /> <FaStar className='text-[yellow]' />
                            <FaStar className='text-[yellow]' /><FaStar className='text-[yellow]' />
                        </div>
                        <p className='px-[20px] text-[15px]  text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos soluta perferendis aut officia in dolores ullam reprehenderit ea tempore repudiandae!</p>

                    </div>
                </div>
            </section>

            <section className="">
                <h1 className="text-center capitalize text-[35px] font-[600] py-[30px]">How its works</h1>

                <div className="px-[100px] flex justify-around items-center pb-[50px]">
                    <div className="w-56 border border-gray-300 rounded-lg shadow-md relative bg-white ">

                        <img src={work1} alt="" className="w-full h-40 object-cover rounded-t-lg" />

                        <div className="p-3">
                            <h1 className="font-bold text-[14px]">Lorem ipsum dolor sit</h1>
                            <p className="text-[12px] text-gray-600">
                                Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.
                            </p>
                        </div>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white text-sm font-bold absolute top-0 left-0 shadow-md z-10">
                            01
                        </span>
                    </div>
                    <div className="w-56 border border-gray-300 rounded-lg shadow-md relative bg-white translate-y-[30px]">

                        <img src={work2} alt="" className="w-full h-40 object-cover rounded-t-lg" />

                        <div className="p-3">
                            <h1 className="font-bold text-[14px]">Lorem ipsum dolor sit</h1>
                            <p className="text-[12px] text-gray-600">
                                Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.
                            </p>
                        </div>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white text-sm font-bold absolute top-0 left-0 shadow-md z-10">
                            02
                        </span>
                    </div>
                    <div className="w-56 border border-gray-300 rounded-lg shadow-md relative bg-white ">

                        <img src={work3} alt="" className="w-full h-40 object-cover rounded-t-lg" />

                        <div className="p-3">
                            <h1 className="font-bold text-[14px]">Lorem ipsum dolor sit</h1>
                            <p className="text-[12px] text-gray-600">
                                Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.
                            </p>
                        </div>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white text-sm font-bold absolute top-0 left-0 shadow-md z-10">
                            03
                        </span>
                    </div>
                    <div className="w-56 border border-gray-300 rounded-lg shadow-md relative bg-white translate-y-[30px]">

                        <img src={work3} alt="" className="w-full h-40 object-cover rounded-t-lg" />

                        <div className="p-3">
                            <h1 className="font-bold text-[14px]">Lorem ipsum dolor sit</h1>
                            <p className="text-[12px] text-gray-600">
                                Lorem ipsum dolor sit amet consect. Sed mi amet blandit feugiat vitae in faucibus.
                            </p>
                        </div>
                        <span className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white text-sm font-bold absolute top-0 left-0 shadow-md z-10">
                            04
                        </span>
                    </div>
                </div>

            </section>

            <section className="py-[50px]">
                <h2 className='text-center text-[35px] font-[600] capitalize'>best sellers</h2>
                <div className="flex justify-evenly items-center gap-8 flex-wrap px-[100px] pt-[30px]">
                    <div className="flex flex-col">
                        <img src={trending1} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending2} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending3} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>



                </div>
            </section>

            <section className="w-full h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col  justify-start items-center pt-[100px] " style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${fantasy})`,
                clipPath: `polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)`
            }}
            >
               
                    <h1 className='text-[50px] capitalize text-white font-[700] py-4'>Final Fantasy VII Reborn</h1>
                    <p className='text-white py-2 text-[30px] font-[600]'>16.99€</p>
                    <a href="#" className='text-white capitalize bg-[red] font-[600] py-2 px-4 rounded-[30px]'>learn more</a>
            

            </section>

             <section className="mt-[20px]  py-[50px] ">
                <h1 className='text-center capitalize text-[35px] font-[600] pb-[30px]'>Categories</h1>

                <div className="flex justify-evenly  pb-[10px] ">
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${cycling})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className="px-[20px] py-[10px]  bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Event})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                </div>
                <div className="flex justify-evenly  pb-[10px] ">
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${cycling})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className="px-[20px] py-[10px]  bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Event})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                </div>
                <div className="flex justify-evenly  pb-[10px] ">
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${cycling})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className="px-[20px] py-[10px]  bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center  rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                    <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center rounded-lg text-[white] flex flex-col justify-center items-center"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Event})`
                        }}
                    >
                        <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                        <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                    </div>
                </div>
            </section>

             <section className="py-[70px]">
                <h2 className='text-center text-[35px] font-[600] capitalize'>Weekly Deals</h2>
                <div className="flex justify-evenly items-center gap-8 flex-wrap px-[100px] pt-[30px]">
                    <div className="flex flex-col">
                        <img src={trending1} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending2} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src={trending3} alt="" className="w-[350px] h-[200px] rounded-[10px]" />
                        <div className="flex justify-between items-center">
                            <p>Path Of Exile 2</p>
                            <p className='font-[800]'>16.99€</p>
                        </div>
                    </div>



                </div>
            </section>








        </>
    )
}

export default Home