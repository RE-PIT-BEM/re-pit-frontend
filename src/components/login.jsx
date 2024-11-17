import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${polygonHome})` }}
    >
      <div className="w-11/12 sm:w-4/12 bg-[#151618] mx-auto px-6 py-16 rounded-xl pl-12 pr-12 sm:pl-12 sm:pr-12">
        <h1 className="w-fit mx-auto bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent text-[26px] font-bold font-sansation mt-8">
          Login
        </h1>
        <p className="w-fit mx-auto my-1 text-gray-400 text-[16px]">
          Pakai Akun SIAM yaaa!
        </p>

        <h1 className="text-bold text-white mt-4">NIM</h1>
        <input
          placeholder="NIM"
          type="text"
          className="w-full bg-gray-100 border bg-transparent border-[#E6E6E6] placeholder:px-3 py-4 px-3 mt-1 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F]"
        />

        <h1 className="text-bold text-white">Password</h1>
        <input
          placeholder="Password"
          type="password"
          className="mt-1 block w-full bg-gray-100 bg-transparent placeholder:px-3 text-gray-700 border border-[#E6E6E6] py-4 px-3 mb-4 rounded-[10px] focus:outline-none focus:border-[#7A5DDA] placeholder:text-[#4F4F4F]"
        />

        <Link to="/request">
          <div className="mx-auto sm:mx-16 my-6 sm:my-12">
            <button className="w-full h-full bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white py-3 rounded-md text-[18px] font-bold text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
              Login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
