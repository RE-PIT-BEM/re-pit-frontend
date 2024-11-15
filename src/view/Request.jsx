import React from "react";
import Sidebar from "../components/Sidebar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";

const Request = () => {
  return (
    <div className="relative h-screen bg-home flex flex-col">
      {/* Main Layout */}
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

          {/* Additional content can go here */}
          <div className="border rounded-md border-1 border-[#7A5DDA]">
            <h1 className="font-sansation mt-8 font-bold text-center text-2xl bg-gradient-to-r from-[#493883] to-[#7A5DDA]  bg-clip-text text-transparent">
              Request Baru
            </h1>

            <div>
              <h1 className="ml-8 mt-3 font-bold font-sansation text-white">
                Nama Program Kerja <span className="text-[#7A5DDA]">*</span>
              </h1>
              <input
                placeholder="NIM"
                type="text"
                className="w-full bg-gray-100 border border-[#E6E6E6] py-4 px-3 mt-1 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#2B214C] p-6 md:p-10 text-white flex items-center justify-center">
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
