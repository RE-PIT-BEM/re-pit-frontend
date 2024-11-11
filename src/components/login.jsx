import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import bem from "../assets/bem.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="h-screen bg-cover flex items-center bg-center w-full min-h-screen"
        style={{ backgroundImage: `url(${polygonHome})` }}
      >
        <div className="w-4/12 bg-white mx-auto px-6 py-20 rounded-xl pl-12 pr-12">
          <h1 className="w-fit mx-auto text-black text-[26px] font-bold font-sansation -mt-4  ">
            Login
          </h1>
          <p className="w-fit mx-auto my-1 text-gray-400 text-[16px] ">
            Pakai Akun SIAM yaaa!
          </p>

          <h1 className="text-bold text-black mt-4">NIM</h1>
          <input
            placeholder="NIM"
            type="text"
            className="w-full bg-gray-100 border border-[#E6E6E6] py-4 px-3 mt-1 mb-4 rounded-[10px] focus:border-[#EE333D] focus:outline-none text-slate-600"
          />

          <h1 className="text-bold text-black">Password</h1>
          <input
            placeholder="Password"
            type="password"
            className="mt-1 block w-full bg-gray-100 text-gray-700 border border-[#E6E6E6] py-4 px-3 mb-4 rounded-[10px] focus:outline-none focus:bg-white focus:border-[#EE333D]"
          />

          <Link to="/Dashboard">
            <button className="w-full bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white py-3 rounded-md text-[18px] font-bold text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
