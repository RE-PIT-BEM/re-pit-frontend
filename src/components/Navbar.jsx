import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import rePIT from "../assets/rePIT.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If scrolling down, hide navbar
      setShowNavbar(false);
    } else {
      // If scrolling up, show navbar
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
        <div className="h-8 rounded-md bg-transparent px-[76px]">
          <button></button>
        </div>
        <div className="flex h-[38px] my-8 select-none pointer-events-none">
          <img src={rePIT} alt="" />
        </div>
        <div>
          <Link to="/login">
            <button className="select-none font-sansation text-sm pb-1 h-[38px] rounded-md bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-[26px] py-[2px] mx-10 my-3 text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
