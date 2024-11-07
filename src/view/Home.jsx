import React from "react";
import polygonHome from "../assets/polygonHome.svg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />

        <div className="bg-home h-9 min-h-screen flex items-top justify-center">
          <div
            className="flex bg-fixed bg-cover bg-center w-screen h-full"
            style={{ backgroundImage: `url(${polygonHome})` }}
          >
            <div className="w-full ">
              <div className="w-fit mx-auto mt-28 text-white font-bold text-[48px]">
                Request Web
              </div>
              <div className="w-fit mx-auto  text-white font-bold text-[48px]">
                Event Tanpa Ribet!
              </div>
              <div className="w-fit mx-auto  text-white ">
                Permudah proses request Web Event sesuai kebutuhanmu. Lengkapi
                pendaftaran, konfirmasi, dan revisi tanpa misskom 😝
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
