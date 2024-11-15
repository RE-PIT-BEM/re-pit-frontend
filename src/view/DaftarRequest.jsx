import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";

const DaftarReq = () => {
  return (
    <>
      <div className="relative h-screen bg-home flex flex-col">
        {/* Sidebar */}
        <div className="w-full lg:w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
      </div>
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
    </>
  );
};

export default DaftarReq;
