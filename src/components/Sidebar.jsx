import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import rePIT from "../assets/rePIT.svg";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      onClick={() => {
        setActiveLink(to);
        toggleSidebar();
      }}
      className={`block p-4 mx-auto py-2 rounded-md text-[14px] font-sansation duration-300 ${
        activeLink === to
          ? "bg-gradient-to-r from-[#7A5DDA] to-[#493883] shadow-lg text-white"
          : "bg-[#151618] hover:bg-gray-600 text-white"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <div className="h-screen relative">
      {/* Header for Mobile */}
      <div className="border-b-2 border-[#7A5DDA] lg:hidden flex items-center justify-between px-4 py-2 bg-home text-white fixed top-0 left-0 right-0 z-20">
        <img
          src={rePIT}
          alt="rePIT Logo"
          className="h-7 w-auto select-none pointer-events-none"
        />
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="border-2 border-[#7A5DDA] text-white rounded-md px-2 p-1"
        >
          ☰
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } lg:h-full w-full lg:w-64 bg-[#151618] text-white transform lg:translate-y-0 lg:relative lg:transform-none transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex items-center h-16 px-4 lg:border-b-2 lg:border-[#7A5DDA]">
          <img
            src={rePIT}
            alt="rePIT Logo"
            className="h-7 mb-2 w-auto select-none pointer-events-none"
          />
        </div>
        <nav className="mt-5 mx-auto ml-4 mr-4 space-y-4">
          <NavLink to="/request">Request Baru</NavLink>
          <NavLink to="/daftar-request">Daftar Request</NavLink>
        </nav>
        <div className="border-b-[1px] border-[#FFFFFF1A] mx-4 mt-6"></div>
        <Link to="/home">
          <div className="mx-auto mt-8 ml-4 mr-4 mb-4">
            <button
              onClick={toggleSidebar}
              className="block w-full py-[6px] mx-auto border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white hover:shadow-[0_0_5px_0_#ffffff] duration-300"
            >
              Logout
            </button>
          </div>
        </Link>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
