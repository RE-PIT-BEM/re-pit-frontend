import React from "react";
import { Link } from "react-router-dom";
import warning from "../assets/warning.svg";

const Reason = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-[#7A5DDA] h-[353px] w-[426px] bg-[#131416]  rounded-xl">
        <img src={warning} alt="" className="w-24 flex mx-auto mt-6 mb-6" />
        <h1 className="text-center text-[24px] font-semiboldbold text-white">
          Alasan Menolak Request
        </h1>

        <div className="flex justify-center items-center mt-4 px-10">
          <input
            placeholder="Request Kurang Lengkap"
            type="text"
            className="w-full bg-transparent border border-neutral-400 py-2 px-3 mt-2 mb-4 rounded-md focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
          />
        </div>
        <Link to="/request">
          <div className="mx-auto flex justify-center items-center mt-3 px-10">
            <button className="w-full bg-error hover:bg-transparent hover:border hover:border-[#7A5DDA] py-1 rounded-md text-[18px] font-bold text-white ">
              Kirim
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Reason;
