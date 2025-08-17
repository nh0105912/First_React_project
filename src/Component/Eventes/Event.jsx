import React from 'react'
import bg_image from '../Eventes/images/bg-Event.jpeg';

import cycling from '../Eventes/images/Cycling-Event.jpeg'
import sport from '../Eventes/images/Sport-Event.jpeg'
import Events from '../Eventes/images/Event-Hire.jpeg';


const Event = () => {
   return (
          <>
              <section className="bg-no-repeat bg-center bg-cover w-full h-[100vh] flex justify-center items-center flex-col" style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bg_image})`,
                  clipPath: `polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)`
  
              }}>
                  <h2 className='text-[40px] text-white font-[700] py-4'>All Events</h2>
                  <p className='text-white text-[20px] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, veniam voluptatum quasi totam iure aliquam, ea est similique ad modi laboriosam vero iste.</p>
                  <button className='px-[20px] py-[10px] rounded-[30px] border-2 border-white mt-[40px] text-white capitalize font-[600] text-[20px]'>more info</button>
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
                                  <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg text-[white] flex flex-col justify-center items-center"
                                      style={{
                                          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                                      }}
                                  >
                                      <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                                      <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                                  </div>
                                  <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg text-[white] flex flex-col justify-center items-center"
                                      style={{
                                          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Events})`
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
                                  <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg text-[white] flex flex-col justify-center items-center"
                                      style={{
                                          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${sport})`
                                      }}
                                  >
                                      <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                                      <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                                  </div>
                                  <div className="w-[380px] h-[300px] bg-no-repeat bg-cover bg-center h-[300px] rounded-lg text-[white] flex flex-col justify-center items-center"
                                      style={{
                                          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Events})`
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
                                          backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${Events})`
                                      }}
                                  >
                                      <h3 className="text-[23px] font-[600] ">Cycling Events</h3>
                                      <button className=" px-[20px] py-[10px] bg-[red] text-white mt-[10px] rounded-[30px]">Learn More</button>
                                  </div>
                              </div>
                          </section>
          </>
      )
    }
export default Event