import React from "react";

import { MdOutlineArrowRightAlt } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className=" px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver mx-auto py-16">
      <div className=" flex items-center justify-center lg:w-2/5 mx-auto">
        <div className=" text-center">
          <h2 className=" lg:text-5xl text-3xl text-neutral-700 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className=" flex justify-center">
            <button className=" btn-primary flex items-center gap-2">
              Get a Demo{" "}
              <span className="">
                <MdOutlineArrowRightAlt />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
