import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import Navbar from "../components/Navbar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";
import karakter from "../assets/Karakter.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="bg-home min-h-screen flex flex-col items-center justify-center">
          <div
            className="bg-cover bg-center w-full min-h-screen"
            style={{
              backgroundImage: `url(${polygonHome})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="w-full flex flex-col gap-10 mt-28 items-center">
              <div className="text-center">
                <h1 className="font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold xl:text-[96px] md:text-[96px] text-[48px] leading-tight">
                  Request Web Event <br />
                  Tanpa Ribet!
                </h1>
              </div>

              <div className="select-none w-fit text-white text-lg text-center -mt-4">
                Permudah proses request Web Event sesuai kebutuhanmu. <br />
                Lengkapi pendaftaran, konfirmasi, dan revisi tanpa misskom 😝
              </div>

              <div className="w-fit">
                <Link to="/login">
                  <button className="select-none font-sansation text-sm h-10 rounded-md bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-8 py-1 text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
                    Request
                  </button>
                </Link>
              </div>

              <div className="bg-[#2B214C] h-[40vh] md:h-[527px] w-[90vw] md:w-[1026px] rounded-md mx-auto"></div>

              {/* SECTION 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-[50vh] md:mt-[300px] justify-items-center px-4 md:px-0">
                <div className="col-span-2">
                  <h1 className="text-center text-2xl md:text-4xl font-sansation bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold">
                    RE-PIT
                  </h1>
                  <p className="text-justify mt-4 md:px-40">
                    RE-PIT adalah platform request Web Event yang dikembangkan
                    oleh Kebiroan PIT BEM FILKOM UB untuk memfasilitasi
                    pengajuan, pengelolaan, dan konfirmasi event secara
                    terstruktur dan efisien. Platform ini bertujuan membantu
                    kementerian dan organisasi BEM dalam melaksanakan program
                    kerja mereka dengan lebih mudah dan teratur. Dengan sistem
                    yang dirancang sesuai SOP, Re-PIT memastikan setiap detail
                    kebutuhan acara tercatat dengan jelas, mengurangi ambiguitas
                    dalam pengisian form, dan memungkinkan setiap proses request
                    hingga persetujuan berjalan lancar.
                  </p>
                </div>

                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt="RE-PIT by PITIK IMUD"
                    className="mr-48 h-32 md:h-64 pointer-events-none"
                  />
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center mt-[50vh] md:mt-[300px] justify-items-center px-4 md:px-0">
                <div className="flex justify-center">
                  <img
                    src={karakter}
                    alt="RE-PIT by PITIK IMUD"
                    className="ml-40 h-32 md:h-64 pointer-events-none"
                  />
                </div>

                <div className="col-span-2">
                  <h1 className="text-center text-2xl md:text-4xl font-sansation bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold">
                    FITUR UTAMA
                  </h1>
                  <p className="text-justify mt-4 md:px-40">
                    Re-PIT menawarkan kemudahan dalam pengajuan Web Event dengan
                    sistem terstruktur, notifikasi otomatis, dan panel
                    administrasi lengkap untuk pengelolaan pendaftaran yang
                    transparan dan akurat. <br />
                    - Form Request yang Terstruktur
                    <br />
                    - Sistem Notifikasi Otomatis <br />
                    - Akses Admin untuk Manajemen Pendaftaran <br />
                  </p>
                </div>
              </div>

              {/* STAFF IMUD */}
              <div className="text-center mt-[50vh] md:mt-[300px]">
                <h1 className="font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold text-3xl md:text-[40px] leading-tight">
                  Staff Imud PIT
                </h1>
                <h1 className="font-sansation select-none bg-white bg-clip-text text-transparent font-bold text-3xl md:text-[40px] leading-tight">
                  BEM FILKOM Arthakara
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24 justify-center items-center">
                <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl  p-8">
                  <div className="bg-[#ffffff] h-64 md:h-80 w-48 md:w-64 rounded-md flex items-center justify-center">
                    01
                  </div>
                </div>

                <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl  p-8">
                  <div className="bg-white h-64 md:h-80 w-48 md:w-64 rounded-md flex items-center justify-center">
                    <img src={logo} alt="RE-PIT by PITIK IMUD" className="" />
                  </div>
                </div>
                <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl  p-8">
                  <div className="bg-[#ffffff] h-64 md:h-80 w-48 md:w-64 rounded-md flex items-center justify-center">
                    03
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[280px] justify-center items-center text-center select-none pointer-events-none">
                <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent leading-7">
                  <h1 className="text-xl md:text-[28px] font-bold">DAFFA</h1>
                  <span>
                    <p className="text-white text-base md:text-16 select-none pointer-events-none">
                      UI/UX Designer
                    </p>
                  </span>
                </div>

                <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent leading-7">
                  <h1 className="text-xl md:text-[28px] font-bold">RAJISTHA</h1>
                  <span>
                    <p className="text-white text-base md:text-16 select-none pointer-events-none">
                      Front-end Developer
                    </p>
                  </span>
                </div>

                <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent leading-7">
                  <h1 className="text-xl md:text-[28px] font-bold">JEPON</h1>
                  <span>
                    <p className="text-white text-base md:text-16 select-none pointer-events-none">
                      Back-end Developer
                    </p>
                  </span>
                </div>
              </div>

              <div className="bg-[#2B214C] p-20 md:p-[100px] w-full flex items-center justify-center mt-[50vh] md:mt-[300px]">
                <div className="grid grid-cols-1 items-center justify-items-center w-full">
                  <div className="flex space-x-2">
                    <img
                      src={bem}
                      alt="BEM Logo"
                      className="h-20 md:h-[120px] select-none pointer-events-none"
                    />
                    <img
                      src={logo}
                      alt="RE-PIT Logo"
                      className="h-16 md:h-[90px] mt-4 select-none pointer-events-none"
                    />
                  </div>
                  <h1 className="mt-8 md:mt-[30px] text-center text-base md:text-lg">
                    Made with ❤️ by Staff Imud PIT BEM FILKOM Arthakara
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
