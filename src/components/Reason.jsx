import React, { useState } from "react";
import { Link } from "react-router-dom";
import warning from "../assets/warning.svg";

const Reason = (param) => {
  const [reason, setReason] = useState("");

  const submit = () => {
    if (reason !== "") {
      param.handlerRejection(reason);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 border-[#7A5DDA] h-[250px] w-[323px] md:h-[353px] md:w-[426px] bg-[#131416]  rounded-xl">
        <img
          src={warning}
          alt=""
          className="w-16 md:w-24 flex mx-auto mt-6 mb-6"
        />
        <h1 className="text-center text-[15px] md:text-[24px] font-semiboldbold text-white">
          Alasan Menolak Request
        </h1>

        <div className="flex justify-center items-center md:mt-4 px-10">
          <input
            placeholder="Request Kurang Lengkap"
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full bg-transparent border border-neutral-400 py-2 px-3 mt-2 mb-4 rounded-md focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
          />
        </div>

        <div className="w-full flex items-center md:mt-3 px-10 gap-4">
          <div className="w-full">
            <button
              onClick={submit}
              disabled={reason == ""}
              className="w-full bg-error hover:bg-transparent hover:border disabled:bg-red-950 disabled:cursor-not-allowed hover:border-error py-1 rounded-md text-[18px] font-semibold text-white "
            >
              Kirim
            </button>
          </div>
          <div className="modal-action mt-0 w-full">
            <form method="dialog" className="w-full">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="w-full hover:bg-transparent border border-[#7A5DDA] py-1 rounded-md text-[18px] font-semibold text-white "
                id="close-btn-rejection"
              >
                Tutup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
