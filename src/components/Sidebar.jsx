import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import rePIT from "../assets/rePIT.svg";
import daftareq from "../assets/button/Daftareq.svg";
import LogoutSVG from "../assets/button/Logout.svg";
import reqbaru from "../assets/button/Reqbaru.svg";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { logout } = useAuth();

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
      className={`block p-4 mx-auto py-2 rounded-[8px] text-[14px] font-sansation duration-300 ${
        activeLink === to
          ? "bg-gradient-to-r from-[#7A5DDA] to-[#493883] shadow-lg text-white"
          : "bg-[#151618] text-white"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <div className="h-screen relative">
      {/* Header for Mobile */}
      <div className="border-b-2 border-[#7A5DDA] lg:hidden flex items-center justify-between px-4 py-2 bg-home text-white fixed top-0 left-0 right-0 z-50">
        <img
          src={rePIT}
          alt="rePIT Logo"
          className="h-7 w-auto select-none pointer-events-none"
        />
        <button
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
          className="border-2 border-[#7A5DDA] text-white rounded-md p-1"
          style={{ width: "2rem" }}
        >
          {isSidebarOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full lg:w-64 lg:h-screen bg-[#151618] text-white transform transition-transform duration-300 ease-in-out z-10 ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } lg:translate-y-0 lg:transform-none`}
      >
        <div className="flex items-center h-16 px-4 lg:border-b-2 lg:border-[#7A5DDA]">
          <img
            src={rePIT}
            alt="rePIT Logo"
            className="h-7 mb-2 w-auto select-none pointer-events-none"
          />
        </div>
        <nav className="mt-5 mx-auto ml-4 mr-4 space-y-4">
          <NavLink
            to="/request"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <div className="flex items-center w-full">
              <img
                src={reqbaru}
                alt="BEM Logo"
                className="h-5 w-5 object-contain"
              />
              <span className="ml-2 text-sm">Request Baru</span>
            </div>
          </NavLink>

          <NavLink
            to="/daftar-request"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <div className="flex items-center w-full">
              <img
                src={daftareq}
                alt="BEM Logo"
                className="h-5 w-5 object-contain"
              />
              <span className="ml-2 text-sm">Daftar Request</span>
            </div>
          </NavLink>
        </nav>

        <div className="border-b-[1px] border-[#FFFFFF1A] mx-4 mt-6"></div>
        <div className="mx-auto mt-8 ml-4 mr-4 mb-4">
          <button
            onClick={logout}
            className="flex items-center justify-center w-full py-[6px] border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white hover:shadow-[0_0_5px_0_#ffffff] duration-300"
          >
            <span>Logout</span>
            <img
              src={LogoutSVG}
              alt="Logout Icon"
              className="ml-3 h-4 w-4 object-contain mr-2"
            />
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-0"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
