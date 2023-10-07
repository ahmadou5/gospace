'use client'
import { Button } from "../Button";
import { Para } from "../Parallex";

//import { BCard } from "../Cards";
//import carbon from "./assets";



export const Hero = () => {


  return (
    <div id="th" className="w-[100%] h-auto lg:h-[1200px] bg-black mt-20 text-2xl">
      {/** mobile view */}
      <div className=" drop-shadow-2xl mt-1 hidden  w-[100%] lg :hidden md:hidden">
        mobile
      </div>
      {/** desktop view */}
      <div className="drop-shadow-2xl lg:flex md:flex w-[100%]">
        {/** content view */}
        <div className="w-[100%] mt-20 mb-4 lg:mt-32 lg:mb-8 text-white text-center h-">
          <div className="mt-6 mb-6">
            <p className="font-light text-black text-xl mt-30 lg:text-2xl">
              Explore Space With US
            </p>
          </div>
          <div className="mt-20 mb-18 w-[85%] lg:w-[70%] ml-auto mr-auto">
            <p className="mt-2 mb-2 font-extrabold text-md lg:text-4xl">
             <img  />
            </p>
            <Para />
            <div className="w-[50%] mt-20 mb-5 ml-auto mr-auto">
            <Button text={"Explore"} />   </div>
            </div>
        </div>
        {/** img view */}
        <div></div>
      </div>
    </div>
  );
};
