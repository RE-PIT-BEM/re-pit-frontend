import React, { useState } from "react";
import { Link } from "react-router-dom";
import warning from "../assets/warning.svg";

const ReasonDisplay = (param) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-[#7A5DDA] min-w-[300px] sm:min-w-[325px] md:min-w-[350px] lg:min-w-[375px] xl:min-w-[400px] mx-[25px] sm:mx-[50px] md:mx-[100px] lg:mx-[200px] xl:mx-[400px]  bg-[#131416]  rounded-xl">
        <img
          src={warning}
          alt=""
          className="w-16 md:w-24 flex mx-auto mt-6 md:mb-6 mb-3"
        />
        <h1 className="text-center text-[15px] md:text-[24px] font-semibold text-white">
          Alasan Ditolak
        </h1>

        <p className="my-1 md:my-2 font-sansation text-white flex text-justify justify-center mx-6 md:mx-12 ">
          {param.message}
        </p>

        <div className="w-full flex items-center my-10 md:px-10 px-5 gap-4">
          <div className="w-full">
            <Link to={`/request/${param.requestId}`}>
              <button className="w-full hover:bg-transparent border border-[#7A5DDA] py-1 rounded-md text-[14px] font-semibold text-white  ">
                Lihat Detail
              </button>
            </Link>
          </div>
          <div className="modal-action mt-0 w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="w-full hover:bg-transparent border border-[#7A5DDA] py-1 rounded-md text-[14px] font-semibold text-white "
                id="close-btn-rejection"
              >
                Tutup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonDisplay;
