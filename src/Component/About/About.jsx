import React from 'react'
import bg_image from '../About/image/About_bg.jpeg';
import award from '../About/image/Award.png';
import services from '../About/image/service.png';
import deal from '../About/image/reasonable.png';
import meet from '../About/image/download.png';
import first_img from '../About/image/bg_news.jpeg';
import second_img from '../About/image/gaming2.png';
import member1 from '../About/image/member1.jpeg';
const About = () => {
    return (
        <>
            <section className="bg-no-repeat bg-center bg-cover w-full h-[100vh] flex justify-center items-center flex-col" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bg_image})`,
                clipPath: `polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)`

            }}>
                <h2 className='text-[40px] text-white font-[700] py-4'>About Us</h2>
                <p className='text-white text-[20px] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, veniam voluptatum quasi totam iure aliquam, ea est similique ad modi laboriosam vero iste.</p>
                 <button className='px-[20px] py-[10px] rounded-[30px] border-2 border-white mt-[40px] text-white capitalize font-[600] text-[20px]'>more info</button>
            </section>

            <section className=" flex justify-center gap-[30px] items-center py-[60px] ">
                <div className="border-[1px] border-black w-56 h-56 pt-4 rounded-[10px]">
                    <img src={award} alt="" className='w-20 h-20 mx-auto' />
                    <p className='text-center text-[20px] capitalize px-[20px] py-[10px] '>Awards for Best Services </p>


                </div>
                <div className="border-[1px] border-black w-56 h-56 pt-4 rounded-[10px]">
                    <img src={services} alt="" className='w-20 h-20 mx-auto' />
                    <p className='text-center text-[20px] capitalize px-[20px] py-[10px] '>Services That Put Safety First</p>

                </div>
                <div className="border-[1px] border-black w-56 h-56 pt-4 rounded-[10px]">
                    <img src={meet} alt="" className='w-20 h-20 mx-auto' />
                    <p className='text-center text-[20px] capitalize px-[20px] py-[10px] '>Highly Trusted Partners</p>

                </div>
                <div className="border-[1px] border-black w-56 h-56 pt-4 rounded-[10px]">
                    <img src={deal} alt="" className='w-20 h-20 mx-auto' />
                    <p className='text-center text-[20px] capitalize px-[20px] py-[10px] '>Reasonable on the Pocket!</p>

                </div>

            </section>

            <section className=" ">
                <h1 className="text-center capitalize text-[35px] font-[600] py-[20px]">About Gaming Field Structure</h1>
                <div className="flex justify-center gap-20 items-start mt-20 ">
                    <div className="image">
                        <img src={first_img} alt="" className='w-[100%] h-[350px] rounded-[10px]' />
                    </div>
                    <div className="w-[40%]">
                        <p>Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor. Vitae adipiscing donec suspendisse ultricies molestie commodo sed ut. Sem volutpat in volutpat faucibus habitant lacus. Tellus massa augue massa justo. Mauris commodo urna pharetra non eget gravida ut pharetra cras. Lacinia odio at ac eget. Dolor mollis ipsum nisl faucibus ultricies vel cursus dolor.</p>

                        <button className='mt-20 text-[20px] font-[600] py-2 px-8 rounded-[30px] bg-[#E45352] text-white capitalize'>Read more</button>
                    </div>
                </div>
                <div className="flex justify-center gap-20 items-start mt-20">
                    <div className="w-[40%]">
                        <p>Lorem ipsum dolor sit amet consectetur. Ultricies sed id nulla ornare. Arcu nunc tincidunt cursus convallis diam tortor. Vitae adipiscing donec suspendisse ultricies molestie commodo sed ut. Sem volutpat in volutpat faucibus habitant lacus. Tellus massa augue massa justo. Mauris commodo urna pharetra non eget gravida ut pharetra cras. Lacinia odio at ac eget. Dolor mollis ipsum nisl faucibus ultricies vel cursus dolor.</p>

                        <button className='mt-20 text-[20px] font-[600] py-2 px-8 rounded-[30px] bg-[#E45352] text-white capitalize'>Read more</button>
                    </div>
                    <div className="image">
                        <img src={second_img} alt="" className='w-[100%] h-[350px] rounded-[10px]' />
                    </div>
                </div>
            </section>

            <section className="">
                <h1 className="text-center capitalize py-12 text-[40px] font-[600] ">Group Management Team</h1>
                <div className="w-[100%] flex justify-center items-center gap-[30px] my-[50px] ">
                    <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>

                    <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>
                     <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>
                </div>
                <div className="w-[100%] flex justify-center items-center gap-[30px] my-[50px] ">
                    <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>

                    <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>
                     <div className="border-[1px] border-black rounded-[10px] w-[300px] h-[360px] shadow-[5px_5px_15px_rgba(0,0,0,0.3)]">
                        <img
                            src={member1}
                            alt=""
                            className="w-20 h-20 mx-auto  rounded-[8px]"
                        />
                        <h2 className='text-center capitalize font-[600] py-2 text-[20px]'>Seb Goldin</h2>
                        <h3 className='text-center font-[500] py-2'>CHIEF EXECUTIVE OFFICER</h3>
                        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur. Tristique aliquet ut netus fringilla odio at elementum et. Malesuada pellentesque arcu egestas pharetra in enim cursus habitasse semper.</p>
                        <button className='py-[6px] px-8 rounded-[30px] my-4 block mx-auto bg-[#E45252] text-white'>View Linkedin</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About