import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="bg-home h-9 min-h-screen flex items-top justify-center">
          <div
            className="flex bg-fixed bg-cover bg-center w-screen h-full"
            style={{ backgroundImage: `url(${polygonHome})` }}
          >
            <div className="w-full flex flex-col gap-[30px] mt-28">
              <div className="text-center">
                <h1 className="font-sansation text-gradient-to-r from-[#7A5DDA] to-[#493883] font-bold text-[96px] leading-tight">
                  Request Web Event <br />
                  Tanpa Ribet!
                </h1>
              </div>
              <div className="select-none w-fit mx-auto  text-white text-[16px] text-center mt-[30px] mb-[30px] ">
                Permudah proses request Web Event sesuai kebutuhanmu. <br />{" "}
                Lengkapi pendaftaran, konfirmasi, dan revisi tanpa misskom 😝
              </div>
              <div className="w-fit mx-auto">
                <button className="select-none font-sansation text-sm pb-1 h-[38px] rounded-md bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-[32px] py-[2px] mx-10 my-3  text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA]">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
