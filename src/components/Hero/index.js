'use client'
import { Button } from "../Button";
import { Parallax } from "react-scroll-parallax";





export const Hero = () => {


  return (
    <div id='bg' className="w-[100%] h-auto lg:h-[3600] bg-white mt-20 text-2xl">
      {/** mobile view */}
      <div className=" drop-shadow-2xl mt-1 hidden  w-[100%] lg :hidden md:hidden">
        mobile
      </div>
      {/** desktop view */}
      
      <div className="drop-shadow-2xl mb-[80px] lg:flex flex-col md:flex h-auto w-[100%] lg:h-[100%]" >
        {/** content view */}
        <Parallax speed={-15}>
         <div className="w-[100%] mt-20 mb-4 lg:mt-32 lg:mb-8 text-white text-center h-">
          <div className="mt-6 mb-6">
            <p className="font-bold text-white text-2xl mt-30 lg:text-4xl">
              Explore Space With us
            </p>
            <p className="font-bold text-white text-2xl mt-30 lg:text-4xl">
              Backed By NASA 
            </p>
          </div>
          
         </div>
        </Parallax>
        {/** img view */}
        <Parallax speed={-18}>
        <div>
          <div className="mt-[80px] mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <div className="mt-2 mb-2 font-extrabold text-md lg:text-4xl">
              <img className='rounded-full ml-auto mr-auto w-[100%] h-[100%]' src='./e11.png' />
            </div>
        </div>
        </div>
        </Parallax>
        <Parallax speed={-25}>
        <div>
          <div className="mt-[80px] mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <div className="mt-2 mb-2 font-extrabold text-md lg:text-4xl">
              <img className='rounded-full ml-auto mr-auto w-[100%] h-[100%]' src='./mars.png' />
            </div>
        </div>
        </div>
        </Parallax>
        <Parallax speed={-14}>
        <div>
          <div className="mt-8 mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <div className="mt-2 mb-2 font-extrabold text-md lg:text-4xl">
              <img className='rounded-full ml-auto mr-auto w-[90%] h-[90%]' src='./moon.png' />
            </div>
        </div>
        </div>
        </Parallax>
        <Parallax></Parallax>
        
      </div>
      
    </div>
    
  );
};
