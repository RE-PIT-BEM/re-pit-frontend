import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../components/Sidebar";
import logo from "../assets/logo.svg";
import bem from "../assets/bem.svg";
import { Link, useParams } from "react-router-dom";
import useUserStore from "../lib/userStore";
import { useForm } from "react-hook-form";
import { getAccessToken } from "../lib/tokenUtils";
import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import api from "../lib/api";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { formatValueDate } from "../lib/dateUtil";
import Reason from "../components/Reason";

const getRequest = (id) => {
  try {
  } catch (error) {
    console.ler;
  }
};

const DetailRequest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let params = useParams();

  const { user } = useAuth();
  const [dataRequest, setDataRequest] = useState(null);
  const queryClient = useQueryClient();

  const { status, data, error, isLoading } = useQuery(
    `request/${params.requestId}`,
    {
      queryFn: async () => {
        const token = getAccessToken();
        try {
          const response = await api.get(`/request/${params.requestId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          return response;
        } catch (error) {
          toast.error(error.response.data.errorMessage);

          return null;
        }
      },
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data) {
      setDataRequest(data.data.data.request);
    }
  }, [data]);

  const [today] = useState(() => {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
  });

  const [minDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 8);
    return currentDate.toISOString().split("T")[0];
  });

  // const mutationAddReq = useMutation((data) => {
  //   const token = getAccessToken();
  //   if (!token) return null;
  //   return api.post("/request", data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // });

  const mutationRejectionReq = useMutation((data) => {
    const token = getAccessToken();
    if (!token) return null;
    return api.put(`/request/${params.requestId}/reject`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });

  const mutationAccepetenceReq = useMutation((data) => {
    const token = getAccessToken();
    if (!token) return null;
    return api.put(`/request/${params.requestId}/accept`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  });

  const onSubmit = (data) => {
    const openDate = new Date(data.program_open_date).toISOString();
    const closeDate = new Date(data.program_close_date).toISOString();
    const announcementDate = new Date(
      data.program_announcement_date
    ).toISOString();
    const websiteReleaseDate = new Date(
      data.website_release_date
    ).toISOString();

    data = {
      ...data,
      program_open_date: openDate,
      program_close_date: closeDate,
      program_announcement_date: announcementDate,
      website_release_date: websiteReleaseDate,
    };

    mutationAddReq.mutate(data, {
      onError: (error, variables, context) => {
        // An error happened!
        console.log(`error: `, error);
        const errorMessage = error.response.data.messages;
        const errorMessage2 = error.response.data.errorMessage;
        toast.error(errorMessage ?? errorMessage2);
      },
      onSuccess: (data, variables, context) => {
        const message = data.data.message;
        reset();
        toast.success(message);
        Navigate({
          to: "/daftar-request",
        });
      },
    });
  };

  const rejectRequest = (reason) => {
    mutationRejectionReq.mutate(
      {
        rejected_status_message: reason,
      },
      {
        onSuccess() {
          toast.success("Request rejected successfully");
          document.getElementById("close-btn-rejection").click();
          setDataRequest((prev) => ({
            ...prev,
            rejected_status_message: reason,
            rejected_status: "REJECTED",
          }));

          queryClient.invalidateQueries(`request/${params.requestId}`);
        },
        onError(error) {
          toast.success("Request rejected erorr!");
          console.log(error);
        },
      }
    );
  };

  const acceptRequest = (reason) => {
    mutationAccepetenceReq.mutate(null, {
      onSuccess() {
        toast.success("Request accepted successfully");
        setDataRequest((prev) => ({
          ...prev,
          rejected_status: "ACCEPTED",
        }));

        queryClient.invalidateQueries(`request/${params.requestId}`);
      },
      onError(error) {
        toast.success("Request accepted erorr!");
        console.log(error);
      },
    });
  };

  return (
    <div className="relative min-h-screen bg-home flex flex-col flex-grow max-w-screen">
      {" "}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-0 lg:w-64">
          <Sidebar />
        </div>

        {isLoading && <div>Loading...</div>}

        {!isLoading && !data ? <Navigate to={`/daftar-request`} /> : null}

        {/* Main Content */}
        {data && !isLoading && dataRequest ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex-grow p-8">
            <h1 className="text-2xl font-bold mt-8 lg:mt-4 mb-4 lg:mb-6 font-sansation text-white">
              Halo, {user.name} dari {user.department}!
            </h1>
            <div className="border rounded-[15px] border-1 border-[#7A5DDA]">
              {/*____________________________________________________ BARIS 1-3 _____________________________________________________________________ */}

              <h1 className="font-sansation mt-8 font-bold text-center text-2xl bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent">
                Detail Request
              </h1>

              <div className="m-4 p-2 lg:p-5">
                <h1 className="mt-5 font-bold font-sansation text-white">
                  Nama Program Kerja <span className="text-[#7A5DDA]">*</span>
                </h1>
                <input
                  {...register("program_name", {
                    required: true,
                    value: dataRequest.program_name,
                  })}
                  placeholder="FILAFEST"
                  type="text"
                  className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                />
                {errors.program_name && (
                  <small className="text-red-500">
                    Nama Program Kerja harus diisi!
                  </small>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 ">
                  <div>
                    <h1 className="mt-4 font-bold font-sansation text-white text-lg">
                      Kementrian/Kebiroan
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <select
                      {...register("department", {
                        required: true,
                        value: dataRequest.department,
                      })}
                      className="w-full bg-transparent text-white border border-neutral-400 hover:bg-home hover:border-[#7A5DDA] py-3 px-2 mt-2 rounded-[5px]"
                    >
                      <option value="" disabled selected>
                        Pilih Kementrian / Kebiroan
                      </option>
                      <option value="PIT">PIT</option>
                      <option value="KASTRAT">KASTRAT</option>
                      <option value="EKRAF">EKRAF</option>
                      <option value="KMB">KMB</option>
                      <option value="ADKEU">ADKEU</option>
                      <option value="MEDINKRAF">MEDINKRAF</option>
                      <option value="SOSLING">SOSLING</option>
                      <option value="PSDM">PSDM</option>
                      <option value="ADVOKESMA">ADVOKESMA</option>
                      {/* Tambahkan lebih banyak opsi sesuai kebutuhan */}
                    </select>
                    {errors.department && (
                      <small className="text-red-500">
                        Kementrian / Kebiroan harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className="mt-5 font-bold font-sansation text-white">
                      Link Grup Koordinasi Proker / Event{" "}
                    </h1>
                    <input
                      {...register("group_link", {
                        required: "Link harus diisi!",
                        value: dataRequest.group_link,
                        pattern: {
                          value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                          message: "Link tidak valid!",
                        },
                      })}
                      placeholder="https://waa.wwa/88080"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.group_link && (
                      <small className="text-red-500">
                        {errors.group_link.message}
                      </small>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8  lg:pb-28">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Nama PJ Proker / Event{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("contact_name", {
                        required: true,
                        value: dataRequest.contact_name,
                      })}
                      placeholder="Ajes"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.contact_name && (
                      <small className="text-red-500">
                        Nama PJ harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Kontak PJ Proker / Event{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("contact_info", {
                        required: true,
                        value: dataRequest.contact_info,
                      })}
                      placeholder="081246091171"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.contact_info && (
                      <small className="text-red-500">
                        Kontak PJ harus diisi!
                      </small>
                    )}
                  </div>
                </div>
                {/*____________________________________________________ BARIS 4-7 _____________________________________________________________________ */}
                <h1 className=" mt-16 lg:mt-5 font-bold font-sansation text-white">
                  Deskripsi Proker <span className="text-[#7A5DDA]">*</span>
                </h1>
                <textarea
                  {...register("program_description", {
                    required: true,
                    value: dataRequest.program_description,
                  })}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
                  className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white placeholder:text-left placeholder:top-0"
                  rows="6"
                  style={{ resize: "none" }}
                />
                {errors.program_description && (
                  <small className="text-red-500">
                    Deskripsi Proker harus diisi!
                  </small>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Timeline Proker <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      {...register("program_timeline", {
                        required: true,
                        value: dataRequest.program_timeline,
                      })}
                      placeholder="PKKMB
            - Coming Soon: 19 Maret
            - Open Tender: 21 Maret - 25 Maret
            - Close Registration: 27 Maret
            - FnP: 29 Maret - 31 Maret (daring)
            - Pengumuman: 2 April"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                    {errors.program_timeline && (
                      <small className="text-red-500">
                        Timeline Proker harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Timeline Extend
                    </h1>
                    <textarea
                      {...register("program_timeline_extend", {
                        value: dataRequest.program_timeline_extend,
                      })}
                      placeholder="info info"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Foto Kegiatan Proker / Event{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("program_photo_url", {
                        required: "Link harus diisi!",
                        value: dataRequest.program_photo_url,
                        pattern: {
                          value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                          message: "Link tidak valid!",
                        },
                      })}
                      placeholder="https://drive.google.com/ajesplisbuatporto"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.program_photo_url && (
                      <small className="text-red-500">
                        {errors.program_photo_url.message}
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Logo Proker / Event{" "}
                    </h1>
                    <input
                      {...register("program_logo_url", {
                        value: dataRequest.program_logo_url,
                      })}
                      placeholder="https://drive.google.com/ajesplisbuatporto"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:pb-28">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Pilihan Divisi <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("program_division", {
                        required: true,
                        value: dataRequest.program_division,
                      })}
                      placeholder="DDM, Humas, Acara"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.program_division && (
                      <small className="text-red-500">
                        Pilihan Divisi harus diisi!
                      </small>
                    )}
                  </div>

                  <div> </div>
                </div>
                {/*____________________________________________________ BARIS 8-11 _____________________________________________________________________ */}
                {/* Baris 8 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h1 className=" mt-16 lg:mt-5 font-bold font-sansation text-white">
                      Pesan Ketika Diterima{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      {...register("acceptence_message", {
                        required: true,
                        value: dataRequest.acceptence_message,
                      })}
                      placeholder="SELAMAT KAMU DITERIMA (>.<)

Silahkan simak pengumuman di bawah ini:

Silahkan gabung grup berikut:
https://line.me/ti/AjEsbuaTp0rtoYUK"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                    {errors.acceptence_message && (
                      <small className="text-red-500">
                        Pesan Ketika Diterima harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Pesan Ketika Ditolak{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      {...register("rejection_message", {
                        required: true,
                        value: dataRequest.rejection_message,
                      })}
                      placeholder="yahahhahaa ditolak "
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                    {errors.rejection_message && (
                      <small className="text-red-500">
                        Pesan Ketika Ditolak harus diisi!
                      </small>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Quotes <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      {...register("program_quotes", {
                        required: true,
                        value: dataRequest.program_quotes,
                      })}
                      placeholder="“Porto nomor sekian, UKM hindu yang utama” - Ajes"
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                    {errors.program_quotes && (
                      <small className="text-red-500">
                        Quotes harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Alur Pendaftaran <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      {...register("program_registration_flow", {
                        required: true,
                        value: dataRequest.program_registration_flow,
                      })}
                      placeholder="1. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM
2. Peserta membaca panduan Alur Pendaftaran Open Tender
3. ....
4. .... "
                      type="text"
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                    />
                    {errors.program_registration_flow && (
                      <small className="text-red-500">
                        Alur Pendaftaran harus diisi!
                      </small>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:pb-28">
                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Data yang dibutuhkan Proker / Event{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <textarea
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      rows="6"
                      style={{ resize: "none" }}
                      placeholder="Nama Lengkap : 
Nama Panggilan :
Prodi :
Tempat, tanggal Lahir :
No Hp :
...."
                      {...register("program_application_form", {
                        required:
                          "Data yang dibutuhkan Proker / Event harus diisi!",
                        value: dataRequest.program_application_form,
                      })}
                    ></textarea>
                    {errors.program_application_form && (
                      <small className="text-red-500">
                        {errors.program_application_form.message}
                      </small>
                    )}
                  </div>

                  <div>
                    <div>
                      <h1 className=" mt-5 font-bold font-sansation text-white">
                        Angkatan yang bisa mendaftar{" "}
                        <span className="text-[#7A5DDA]">*</span>
                      </h1>
                      <input
                        {...register("accepted_batch", {
                          required: "Wajib Diisi!",
                          value: dataRequest.accepted_batch,
                        })}
                        placeholder="2023 & 2024"
                        type="text"
                        className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      />
                      {errors.accepted_batch && (
                        <small className="text-red-500">
                          {errors.accepted_batch.message}
                        </small>
                      )}
                    </div>

                    <div>
                      <h1 className=" mt-5 font-bold font-sansation text-white">
                        Link Template Berkas Pendaftaran{" "}
                        <span className="text-[#7A5DDA]">*</span>
                      </h1>
                      <input
                        {...register("program_registration_template", {
                          required: "Link harus diisi!",
                          value: dataRequest.program_registration_template,
                          pattern: {
                            value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                            message: "Link tidak valid!",
                          },
                        })}
                        placeholder="https://drive.google.com/ajesplisbuatporto"
                        type="text"
                        className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                      />
                      {errors.program_registration_template && (
                        <small className="text-red-500">
                          {errors.program_registration_template.message}
                        </small>
                      )}
                    </div>
                  </div>
                </div>
                {/*____________________________________________________ BARIS 12 _____________________________________________________________________ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:pb-20">
                  <div>
                    <h1 className=" mt-16 lg:mt-5 font-bold font-sansation text-white">
                      Tanggal Buka Pendaftaran{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("program_open_date", {
                        required: true,
                        value: formatValueDate(dataRequest.program_open_date),
                      })}
                      type="date"
                      min={minDate} // Prevents past dates
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-gray-500 text-white"
                    />

                    {errors.program_open_date && (
                      <small className="text-red-500">
                        Tanggal Buka Pendaftaran harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Tanggal Tutup Pendaftaran{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("program_close_date", {
                        required: true,
                        value: formatValueDate(dataRequest.program_close_date),
                      })}
                      type="date"
                      min={minDate} // Prevents past dates
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.program_close_date && (
                      <small className="text-red-500">
                        Tanggal Tutup Pendaftaran harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Tanggal Pengumuman{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("program_announcement_date", {
                        required: true,
                        value: formatValueDate(
                          dataRequest.program_announcement_date
                        ),
                      })}
                      type="date"
                      min={minDate} // Prevents past dates
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.program_announcement_date && (
                      <small className="text-red-500">
                        Tanggal Pengumuman harus diisi!
                      </small>
                    )}
                  </div>

                  <div>
                    <h1 className=" mt-5 font-bold font-sansation text-white">
                      Tanggal Rilis Website{" "}
                      <span className="text-[#7A5DDA]">*</span>
                    </h1>
                    <input
                      {...register("website_release_date", {
                        required: true,
                        value: formatValueDate(
                          dataRequest.website_release_date
                        ),
                      })}
                      type="date"
                      min={minDate} // Prevents past dates
                      className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 rounded-[5px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] text-white"
                    />
                    {errors.website_release_date && (
                      <small className="text-red-500">
                        Tanggal Rilis Website harus diisi!
                      </small>
                    )}
                  </div>
                </div>
                {/*____________________________________________________ EDIT REQUEST _____________________________________________________________________ */}
                {new Date().setHours(0, 0, 0, 0) !==
                new Date(dataRequest.program_open_date) ? (
                  <div className="mx-auto mt-16 lg:mt-0 ">
                    <button
                      className="w-full h-full bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white py-3 rounded-md text-[18px] font-bold text-white hover:text-[#7A5DDA]  duration-300"
                      type="submit"
                    >
                      Edit Request
                    </button>
                  </div>
                ) : null}

                {user.role === "ADMIN" && dataRequest.status === "PENDING" ? (
                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:pb-10">
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById("modal_rejection").showModal()
                      }
                      disabled={
                        mutationRejectionReq.isLoading ||
                        mutationAccepetenceReq.isLoading
                      }
                      className="w-full h-full bg-error py-2 rounded-md text-[18px] font-bold text-white"
                    >
                      Tolak
                    </button>
                    <button
                      type="button"
                      onClick={acceptRequest}
                      disabled={
                        mutationAccepetenceReq.isLoading ||
                        mutationRejectionReq.isLoading
                      }
                      className="w-full h-full bg-sukses 
                     py-2 rounded-md text-[18px] font-bold text-white duration-300"
                    >
                      Terima
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        ) : null}
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#2B214C] p-6 md:p-10 text-white flex items-center justify-center z-10">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4">
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
      <dialog id="modal_rejection" class="modal">
        {/* <div class="modal-box"> */}
        <Reason handlerRejection={rejectRequest} />
        {/* </div> */}
      </dialog>
    </div>
  );
};

export default DetailRequest;
