import React, { useEffect, useState } from "react";
import polygonHome from "../assets/polygonHome.svg";
import Navbar from "../components/Navbar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";
import karakter from "../assets/Karakter.svg";
import landingPage from "../assets/landingPage.svg";
import dafa from "../assets/Dafa.svg";
import jevon from "../assets/Jevon.svg";
import ajes from "../assets/Ajes.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col flex-grow overflow-x-hidden">
        <Navbar />

        <div className="bg-home min-h-screen flex flex-grow flex-col items-center justify-center">
          <div
            className="bg-cover bg-center w-full min-h-screen"
            style={{
              backgroundImage: `url(${polygonHome})`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="w-full flex flex-col lg:gap-10 mt-28 items-center">
              {/* Landing Page Heading */}
              <div
                className={`text-center ${isAnimated ? "animate-fade-in" : ""}`}
              >
                <h1 className="font-sansation px-8 sm:px-10 md:px-36 lg:px-20 xl:px-60 select-none bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent font-bold xl:text-[96px] lg:text-[96px] md:text-[56px] text-[50px] leading-tight">
                  Request Web Event Tanpa Ribet!
                </h1>
              </div>

              {/* Landing Page Description */}
              <div
                className={`select-none w-fit text-white text-lg text-center px-12 sm:px-[150px] md:px-[100px] lg:px-[250px] xl:px-[450px] lg:-mt-4 mt-4 ${
                  isAnimated ? "animate-fade-in" : ""
                }`}
              >
                Permudah proses request Web Event sesuai kebutuhanmu. Lengkapi
                pendaftaran, konfirmasi, dan revisi tanpa misskom 😝
              </div>

              {/* Call-to-Action Button */}
              <div className={`w-fit ${isAnimated ? "animate-fade-in" : ""}`}>
                <Link to="/login">
                  <button className="select-none font-sansation text-sm rounded-lg bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-5 py-1 sm:px-6 md:px-7 lg:px-8 lg:py-2 text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300 mt-4 lg:mt-0">
                    Request
                  </button>
                </Link>
              </div>

              {/* Landing Page Image */}
              <div
                className={`h-[40vh] w-[85vw] lg:w-[960px] xl:w-[1026px] mx-auto mt-10 lg:mt-0 lg:mb-[] xl:mb-[300px] ${
                  isAnimated ? "animate-slide-up" : ""
                }`}
              >
                <img src={landingPage} alt="" className="shadow-xl" />
              </div>

              {/* SECTION 1 */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center xl:mt-[300px] justify-items-center px-4 lg:px-0 md:mt-[200px] lg:mt-[300px] sm:mt-[100px] ${
                  isAnimated ? "animate-slide-in" : ""
                }`}
              >
                <div className="order-2 lg:order-1">
                  <h1 className="text-center xl:pl-44 text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-sansation bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent font-bold">
                    RE-PIT
                  </h1>
                  <p className="text-justify mt-4 lg:px-14 xl:pl-44 px-4 xl:px-0 sm:px-6 md:px-10">
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

                <div className="flex justify-center order-1 lg:order-2">
                  <img
                    src={logo}
                    alt="RE-PIT by PITIK IMUD"
                    className="h-44 mb-12 lg:mb-0 md:h-56 lg:h-64 pointer-events-none"
                  />
                </div>
              </div>

              {/* SECTION 2 */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-[150px] xl:mt-[300px] justify-items-center px-4 lg:px-0 ${
                  isAnimated ? "animate-slide-in" : ""
                }`}
              >
                <div className="flex justify-center order-1 lg:order-1">
                  <img
                    src={karakter}
                    alt="RE-PIT by PITIK IMUD"
                    className="h-44 md:h-56 lg:h-64 pointer-events-none"
                  />
                </div>

                <div className="order-2 lg:order-2">
                  <h1 className="text-center xl:pr-44 text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-sansation bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent font-bold">
                    FITUR UTAMA
                  </h1>
                  <p className="text-justify mt-4 xl:pr-44 px-4 lg:pr-14 xl:px-0 sm:px-6 md:px-10">
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
              <div
                className={`text-center mt-[150px] xl:mt-[300px] ${
                  isAnimated ? "animate-fade-in" : ""
                }`}
              >
                <h1 className="font-sansation select-none bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent font-bold text-4xl sm:text-3xl lg:text-[40px] leading-tight">
                  Staff Imud PIT
                </h1>
                <h1 className="font-sansation select-none bg-white bg-clip-text text-transparent font-bold px-4 lg:px-0 text-4xl sm:text-3xl lg:text-[40px] leading-tight">
                  BEM FILKOM Arthakara
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-24 justify-center items-center mt-8">
                {/* Card 1 */}
                <div
                  className={`flex flex-col items-center gap-4 ${
                    isAnimated ? "animate-slide-up" : ""
                  }`}
                >
                  <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl p-6">
                    <div className="flex items-center justify-center">
                      <img
                        src={dafa}
                        alt="RE-PIT by PITIK IMUD"
                        className="lg:h-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent">
                    <h1 className="text-xl sm:text-lg lg:text-[28px] font-bold">
                      DAFFA
                    </h1>
                    <span>
                      <p className="text-white text-base sm:text-sm lg:text-16 select-none pointer-events-none">
                        UI/UX Designer
                      </p>
                    </span>
                  </div>
                </div>
                {/* Card 2 */}
                <div
                  className={`flex flex-col items-center gap-4 ${
                    isAnimated ? "animate-slide-up" : ""
                  }`}
                >
                  <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl p-6">
                    <div className="flex items-center justify-center">
                      <img
                        src={ajes}
                        alt="RE-PIT by PITIK IMUD"
                        className="lg:h-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent">
                    <h1 className="text-xl sm:text-lg lg:text-[28px] font-bold">
                      RAJISTHA
                    </h1>
                    <span>
                      <p className="text-white text-base sm:text-sm lg:text-16 select-none pointer-events-none">
                        Front-end Developer
                      </p>
                    </span>
                  </div>
                </div>
                {/* Card 3 */}
                <div
                  className={`flex flex-col items-center gap-4 ${
                    isAnimated ? "animate-slide-up" : ""
                  }`}
                >
                  <div className="border-[3px] bg-transparent border-[#493883] rounded-2xl p-6">
                    <div className="flex items-center justify-center">
                      <img
                        src={jevon}
                        alt="RE-PIT by PITIK IMUD"
                        className="lg:h-64"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center font-sansation select-none bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent">
                    <h1 className="text-xl sm:text-lg lg:text-[28px] font-bold">
                      JEVON
                    </h1>
                    <span>
                      <p className="text-white text-base sm:text-sm lg:text-16 select-none pointer-events-none">
                        Back-end Developer
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div
                className={`bg-[#2B214C] p-20 lg:p-[100px] w-full flex items-center justify-center mt-[16vh] lg:mt-[300px] `}
              >
                <div className="grid grid-cols-1 items-center justify-items-center w-full">
                  {/* Logos */}
                  <div className={`flex space-x-2 `}>
                    <img
                      src={bem}
                      alt="BEM Logo"
                      className="h-20 lg:h-[120px] select-none pointer-events-none"
                    />
                    <img
                      src={logo}
                      alt="RE-PIT Logo"
                      className="h-16 lg:h-[90px] mt-4 select-none pointer-events-none"
                    />
                  </div>

                  {/* Footer Text */}
                  <h1
                    className={`mt-8 lg:mt-[30px] text-center text-base sm:text-sm lg:text-lg `}
                  >
                    Made with ❤️ by Staf Imud PIT BEM FILKOM Arthakara
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
