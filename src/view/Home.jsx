import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import Navbar from "../components/Navbar";
import logo from "../assets/Logo.svg";
import karakter from "../assets/Karakter.svg";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="bg-home min-h-screen flex flex-col items-center justify-center">
          <div
            className="top-0 left-0 bg-fixed bg-cover bg-center w-screen min-h-screen"
            style={{ backgroundImage: `url(${polygonHome})` }}
          >
            <div className="w-full flex flex-col gap-10 mt-28 items-center">
              <div className="text-center">
                <h1 className="font-sansation select-none bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold text-6xl leading-tight">
                  Request Web Event <br />
                  Tanpa Ribet!
                </h1>
              </div>

              <div className="select-none w-fit text-white text-lg text-center">
                Permudah proses request Web Event sesuai kebutuhanmu. <br />
                Lengkapi pendaftaran, konfirmasi, dan revisi tanpa misskom 😝
              </div>

              <div className="w-fit">
                <button className="select-none font-sansation text-sm h-10 rounded-md bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white px-8 py-1 text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA]">
                  Request
                </button>
              </div>

              <div className="bg-[#2B214C] h-[527px] w-[1026px] rounded-md mx-auto"></div>

              {/* SECTION 1 */}
              <div className="grid grid-cols-3 gap-10 items-center mt-20">
                <div className="col-span-2">
                  <h1 className="text-center text-4xl font-sansation bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold">
                    RE-PIT
                  </h1>
                  <p className="text-justify mt-4 px-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu. Curabitur pellentesque nibh nibh, at maximus
                    ante fermentum sit amet. Pellentesque commodo lacus at
                    sodales sodales. Quisque sagittis orci ut diam condimentum,
                    vel euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.
                  </p>
                </div>

                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt="RE-PIT by PITIK IMUD"
                    className="h-64 flex"
                  />
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="grid grid-cols-3 gap-10 items-center mt-20">
                <div className="flex justify-center">
                  <img
                    src={karakter}
                    alt="RE-PIT by PITIK IMUD"
                    className="h-64 flex"
                  />
                </div>

                <div className="col-span-2">
                  <h1 className="text-center text-4xl font-sansation bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent font-bold">
                    FITUR UTAMA
                  </h1>
                  <p className="text-justify mt-4 px-20">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu. Curabitur pellentesque nibh nibh, at maximus
                    ante fermentum sit amet. Pellentesque commodo lacus at
                    sodales sodales. Quisque sagittis orci ut diam condimentum,
                    vel euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.
                  </p>
                </div>
              </div>

              {/* STAFF IMUD */}
              <div className="grid grid-cols-3 gap-10 justify-center items-center mt-20">
                <div className="bg-[#2B214C] h-80 w-72 rounded-md flex items-center justify-center">
                  01
                </div>
                <div className="bg-[#2B214C] h-80 w-72 rounded-md flex items-center justify-center">
                  02
                </div>
                <div className="bg-[#2B214C] h-80 w-72 rounded-md flex items-center justify-center">
                  03
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
