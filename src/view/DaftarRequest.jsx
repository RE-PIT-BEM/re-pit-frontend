import React from "react";
import Sidebar from "../components/Sidebar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <div className="relative min-h-screen bg-home flex flex-col">
      {" "}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8">
          <h1 className="text-2xl font-bold mb-4 font-sansation text-white">
            Halo, Ajes!
          </h1>
          {/* REQUEST 1 */}
          <div className="border rounded-[15px] border-[#7A5DDA] p-6">
            <h1 className="font-sansation pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
              Open Recruitment Staf Muda BEM FILKOM 2024
            </h1>

            <div className="grid grid-cols-8  text-left  text-white text-[12px]">
              <h1>TANGGAL DIBUKA</h1>
              <h1 className="ml-6">NAMA PJ</h1>
              <h1>KONTAK PJ</h1>
              <h1 className="ml-5">KEMENBIRO</h1>
            </div>

            <div className="grid grid-cols-8  mt-2 text-left text-white text-[16px] font-bold">
              <h1>25 Des 2024</h1>
              <h1 className="ml-6">Ajes</h1>
              <h1>081246091171</h1>
              <h1 className="ml-5">PIT</h1>
            </div>
          </div>
          {/* REQUEST 2 */}
          <div className="border rounded-[12px] border-[#7A5DDA] p-6 mt-6">
            <h1 className="font-sansation pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
              PENOBATAN DAFA MANUSIA SOK KEREN
            </h1>

            <div className="grid grid-cols-8  text-left  text-white text-[12px]">
              <h1>TANGGAL DIBUKA</h1>
              <h1 className="ml-6">NAMA PJ</h1>
              <h1>KONTAK PJ</h1>
              <h1 className="ml-5">KEMENBIRO</h1>
            </div>

            <div className="grid grid-cols-8  mt-2 text-left text-white text-[16px] font-bold">
              <h1>25 Des 2024</h1>
              <h1 className="ml-6">Ajes</h1>
              <h1>081246091171</h1>
              <h1 className="ml-5">PIT</h1>
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
