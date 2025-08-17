import React from 'react'
import bg_image from "../News/images/bg_news.jpeg";
import database from '../News/images/database-a.jpeg';
import cyber from '../News/images/cyber-B.jpeg';
import protection from '../News/images/Protection.jpeg';
const News = () => {
    return (
        <>
            <section className="bg-no-repeat bg-center bg-cover w-full h-[100vh] flex justify-center items-center flex-col" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bg_image})`,
                clipPath: `polygon(50% 100%, 100% 85%, 100% 0, 0 0, 0 85%)`

            }}>
                <h2 className='text-[40px] text-white font-[700] py-4'>News</h2>
                <p className='text-white text-[20px] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga, veniam voluptatum quasi totam iure aliquam, ea est similique ad modi laboriosam vero iste.</p>
                <button className='px-[20px] py-[10px] rounded-[30px] border-2 border-white mt-[40px] text-white capitalize font-[600] text-[20px]'>more info</button>
            </section>

            <section className="py-[100px]">
                <div className="cards flex justify-center gap-12 items-center ">
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={database} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={cyber} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={protection} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                   
                </div>
                <div className="cards flex justify-center gap-12 items-center mt-12">
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={database} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={cyber} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                    <div className="card border-[1px] rounded-[10px] border-black w-[320px] shadow-2xl py-4 ">
                        <img src={protection} alt="" className='w-[92%] h-48 rounded-[10px] mx-auto' />
                        <h1 className='px-4 py-2 text-[20px] font-[400]' >Oct 01, 2024</h1>
                        <h2 className='px-4 font-[700] pb-2'>Moving your database to Perfect Panel: a step-by-step guide</h2>
                        <p className='px-4 text-[14px]'>Thinking of switching to Perfect Panel but unsure about the data migration process? This guide has all the details you need for a smooth data import process.</p>
                        <p className='mx-4 py-2 mt-8 bg-[#E45352] text-center rounded-[30px] text-white font-[600]'>Read more</p>
                    </div>
                   
                </div>
            </section>
        </>
    )
}

export default News