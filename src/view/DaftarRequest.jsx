import React from "react";
import Sidebar from "../components/Sidebar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";
import error from "../assets/Error.svg";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <div className="relative min-h-screen bg-home flex flex-col">
      {" "}
      <div className="flex flex-grow">
        <div className="w-0 md:w-0 lg:w-96 xl:w-64">
          <Sidebar />
        </div>

        <div className="flex-grow p-8">
          <h1 className="text-2xl font-bold mt-8 lg:mt-4 mb-4 lg:mb-6  font-sansation text-white">
            Halo, Ajes!
          </h1>
          {/* REQUEST 1 */}
          <div className="border rounded-[15px] border-[#7A5DDA] p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h1 className="font-sansation lg:pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
                Tes User Yang Ini
              </h1>
              <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-sukses flex items-center justify-start lg:justify-end">
                Accepted
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 text-left gap-4 md:gap-0 text-white">
              <div>
                <h1 className="text-[12px]">TANGGAL DIBUKA</h1>
                <h1 className="font-bold text-[16px] mt-2">25 Des 2024</h1>
              </div>

              <div>
                <h1 className="ml-6 text-[12px]">NAMA PJ</h1>
                <h1 className="ml-6 font-bold text-[16px] mt-2">Ajes</h1>
              </div>

              <div>
                <h1 className="text-[12px]">KONTAK PJ</h1>
                <h1 className="font-bold text-[16px] mt-2">081246091171</h1>
              </div>
              <div>
                <h1 className="ml-6 text-[12px]">KEMENBIRO</h1>
                <h1 className="ml-6 font-bold text-[16px] mt-2">PIT</h1>
              </div>
              <div className="hidden md:block"></div>
              <div className="hidden xl:block"></div>
              <div className="hidden xl:block"></div>
              <div>
                <Link to="/edit-request">
                  <div className="flex justify-start md:justify-end">
                    <button className=" px-12 py-[6px] border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white duration-300">
                      Detail
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* REQUEST 2 */}
          <div className="border rounded-[15px] border-[#7A5DDA] p-6 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h1 className="font-sansation lg:pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
                Tes Admin Yang Ini
              </h1>
              <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-error flex items-center justify-start lg:justify-end ">
                Rejected
                <span>
                  <img src={error} alt="Error icon" className="ml-2" />
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-2  md:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-0 text-left  text-white">
              <div>
                <h1 className="text-[12px]">TANGGAL DIBUKA</h1>
                <h1 className="font-bold text-[16px] mt-2 ">25 Des 2024</h1>
              </div>

              <div>
                <h1 className="ml-6 text-[12px]">NAMA PJ</h1>
                <h1 className="ml-6 font-bold  text-[16px] mt-2">Ajes</h1>
              </div>

              <div>
                <h1 className="text-[12px]">KONTAK PJ</h1>
                <h1 className="font-bold text-[16px] mt-2">081246091171</h1>
              </div>
              <div>
                <h1 className="ml-6 text-[12px]">KEMENBIRO</h1>
                <h1 className="ml-6 font-bold text-[16px] mt-2">PIT</h1>
              </div>
              <div className="hidden md:block"></div>
              <div className="hidden xl:block"></div>
              <div className="hidden xl:block"></div>

              <div>
                <Link to="/edit-request">
                  <div className="flex justify-start md:justify-end">
                    <button className="px-12 py-[6px] border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white duration-300">
                      Detail
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* REQUEST 3 */}
          <div className="border rounded-[15px] border-[#7A5DDA] p-6 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <h1 className="font-sansation lg:pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
                Open Recruitment Staf Muda BEM FILKOM 2024
              </h1>
              <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-warning flex items-center justify-start lg:justify-end ">
                Pending
              </h1>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-0  text-left  text-white">
              <div>
                <h1 className="text-[12px]">TANGGAL DIBUKA</h1>
                <h1 className="font-bold text-[16px] mt-2 ">25 Des 2024</h1>
              </div>

              <div>
                <h1 className="ml-6 text-[12px]">NAMA PJ</h1>
                <h1 className="ml-6 font-bold text-[16px] mt-2">Ajes</h1>
              </div>

              <div>
                <h1 className="text-[12px]">KONTAK PJ</h1>
                <h1 className="font-bold text-[16px] mt-2">081246091171</h1>
              </div>
              <div>
                <h1 className="ml-6 text-[12px]">KEMENBIRO</h1>
                <h1 className="ml-6 font-bold text-[16px] mt-2">PIT</h1>
              </div>
              <div className="hidden md:block"></div>
              <div className="hidden xl:block"></div>
              <div className="hidden xl:block"></div>

              <div>
                <Link to="/edit-request">
                  <div className="flex justify-start md:justify-end">
                    <button className=" px-12 py-[6px] border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white duration-300">
                      Detail
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#2B214C] p-6 md:p-10 text-white flex items-center justify-center z-10">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <img
              src={bem}
              alt="BEM Logo"
              className="h-16 md:h-20 select-none pointer-events-none"
            />
            <img
              src={logo}
              alt="RE-PIT Logo"
              className="h-14 md:h-18 select-none pointer-events-none"
            />
          </div>
          <h1 className="text-center text-sm md:text-base">
            Made with ❤️ by Staff Imud PIT BEM FILKOM Arthakara
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Request;
