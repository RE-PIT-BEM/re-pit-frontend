import React from "react";
import { Link } from "react-router-dom";
import rePIT from "../assets/rePIT.svg";

const Navbar = () => {
  return (
    <div>
      <div className="flex w-screen items-center justify-between bg-transparent fixed ">
        <div className=" h-8 rounded-md bg-transparent px-[76px] ">
          <button></button>
        </div>
        <div className="flex h-8 my-8  select-none pointer-events-none">
          <img src={rePIT} alt="" />
        </div>
        <div className=" ">
          <button className="select-none text-sm pb-1 h-8 rounded-md bg-[#7A5DDA] hover:bg-white px-[26px] py-[2px] mx-10 my-3  text-white hover:text-[#7A5DDA]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
