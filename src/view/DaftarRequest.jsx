import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import logo from "../assets/logo.svg";
import bem from "../assets/bem.svg";
import errorsvg from "../assets/error.svg";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { getAccessToken } from "../lib/tokenUtils";
import api from "../lib/api";
import { useQuery } from "react-query";
import formatDate from "../lib/dateUtil";
import ReasonDisplay from "../components/ReasonDisplay";

const getRequest = () => {
  const token = getAccessToken();
  return api.get("/request", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const Request = () => {
  const { user } = useAuth();

  const { status, data, error, isLoading } = useQuery("requests", {
    queryFn: getRequest,
    refetchOnWindowFocus: false,
  });

  const [dataRequests, setDataRequest] = useState([]);

  useEffect(() => {
    if (data) {
      setDataRequest(data.data.data.requests);
    }
  }, [data]);

  return (
    <div className="relative min-h-screen bg-home flex flex-col">
      {" "}
      <div className="flex">
        <div className="w-0 md:w-0 lg:w-64">
          <Sidebar />
        </div>

        <div className="flex-grow p-8 relative lg:w-64">
          <h1 className="text-2xl font-bold mt-8 lg:mt-4 mb-4 lg:mb-6  font-sansation text-white">
            Halo, {user.name} dari {user.department}!
          </h1>
          {/* REQUEST 1 */}
          {dataRequests.map((request) => (
            <>
              <div className="border rounded-[15px] border-[#7A5DDA] p-6 mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <h1 className="font-sansation lg:pb-4 font-bold text-start text-[24px] bg-gradient-to-r from-[#493883] to-[#7A5DDA] bg-clip-text text-transparent">
                    {request.program_name}
                  </h1>
                  {request.status === "ACCEPTED" && (
                    <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-sukses flex items-center justify-start lg:justify-end">
                      {request.status}
                    </h1>
                  )}

                  {request.status === "REJECTED" && (
                    <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-error flex items-center justify-start lg:justify-end">
                      {request.status}{" "}
                      <span
                        onClick={() =>
                          document
                            .getElementById(`rejection_display_${request.id}`)
                            .showModal()
                        }
                      >
                        <img src={errorsvg} alt="Error icon" className="ml-2" />
                      </span>
                    </h1>
                  )}

                  {request.status === "PENDING" && (
                    <h1 className="text-end font-sansation pb-4 font-bold text-[24px] text-warning flex items-center justify-start lg:justify-end">
                      {request.status}{" "}
                    </h1>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-8 text-left gap-4 md:gap-0 text-white">
                  <div>
                    <h1 className="text-[12px]">TANGGAL DIBUKA</h1>
                    <h1 className="font-bold text-[16px] mt-2">
                      {formatDate(request.program_open_date)}
                    </h1>
                  </div>

                  <div>
                    <h1 className="ml-6 text-[12px]">NAMA PJ</h1>
                    <h1 className="ml-6 font-bold text-[16px] mt-2">
                      {request.contact_name}
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-[12px]">KONTAK PJ</h1>
                    <h1 className="font-bold text-[16px] mt-2">
                      {request.contact_info}
                    </h1>
                  </div>
                  <div>
                    <h1 className="ml-6 text-[12px]">KEMENBIRO</h1>
                    <h1 className="ml-6 font-bold text-[16px] mt-2">
                      {request.department}
                    </h1>
                  </div>
                  <div className="hidden md:block"></div>
                  <div className="hidden xl:block"></div>
                  <div className="hidden xl:block"></div>
                  <div>
                    <Link to={`/request/${request.id}`}>
                      <div className="flex justify-start md:justify-end">
                        <button className=" px-12 py-[6px] border-2 border-[#7A5DDA] hover:border-[#ffffff] rounded-md text-[14px] text-white duration-300">
                          Detail
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <dialog id={`rejection_display_${request.id}`} className="modal">
                <ReasonDisplay
                  message={request.rejected_status_message}
                  requestId={request.id}
                />
              </dialog>
            </>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#2B214C] p-6 md:p-10 text-white flex items-center justify-center z-10">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <img
              src={bem}
              alt="BEM Logo"
              className="h-16 md:h-20 select-none pointer-events-none"
            />
            <img
              src={logo}
              alt="RE-PIT Logo"
              className="h-14 md:h-18 select-none pointer-events-none"
            />
          </div>
          <h1 className="text-center text-sm md:text-base">
            Made with ❤️ by Staff Imud PIT BEM FILKOM Arthakara
          </h1>
        </div>
      </footer>
    </div>
  );
};

export default Request;
