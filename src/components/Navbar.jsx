import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import rePIT from "../assets/rePIT.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`flex w-screen items-center justify-between bg-transparent fixed transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="lg:px-[24px]  md:-mx-44 py-[7px] px-0 lg:mx-16 -ml-4 my-3 h-8 rounded-md bg-transparent ">
          <button></button>
        </div>

        <div className="flex h-[32px] justify-start lg:h-[38px]   my-8 logo-wrapper">
          <img src={rePIT} alt="Logo" />
        </div>

        <div>
          <Link to="/login">
            <button className="select-none font-sansation text-sm  rounded-md bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-[26px] py-[7px] mx-10 my-3 text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
