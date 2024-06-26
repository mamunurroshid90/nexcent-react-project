import React from "react";

import { Carousel } from "flowbite-react";
import banner1 from "../../public/images/banner1.png";

const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className=" w-full mx-auto">
          <div className=" my-10 md:my-8 py-12 flex flex-col sm:flex-row-reverse items-center justify-between gap-12 ">
            <div className=" ">
              <img src={banner1} alt="banner1" />
            </div>
            {/* hero text */}
            <div className=" md:w-1/2 pb-6">
              <h1 className=" text-2xl md:text-4xl font-semibold mb-2 md:mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className=" text-brandPrimary md:leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className=" text-neutralGrey text-base mb-2 md:mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className=" btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-10 md:my-8 py-12 flex flex-col sm:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            {/* hero text */}
            <div className=" md:w-1/2 pb-6">
              <h1 className=" text-2xl md:text-4xl font-semibold mb-2 md:mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                I am learning{" "}
                <span className=" text-brandPrimary leading-snug">
                  from 3 years
                </span>
              </h1>
              <p className=" text-neutralGrey text-base mb-4 md:mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className=" btn-primary">Register</button>
            </div>
          </div>
          <div className=" my-10 md:my-8 py-12 flex flex-col sm:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img src={banner1} alt="banner1" />
            </div>
            {/* hero text */}
            <div className=" md:w-1/2 pb-6">
              <h1 className=" text-2xl md:text-4xl font-semibold mb-2 md:mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Learn and Earn{" "}
                <span className=" text-brandPrimary leading-snug">
                  from 4 years
                </span>
              </h1>
              <p className=" text-neutralGrey text-base mb-4 md:mb-8">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className=" btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
