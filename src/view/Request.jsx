import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../components/Sidebar";
import logo from "../assets/Logo.svg";
import bem from "../assets/Bem.svg";
import { Link } from "react-router-dom";
import useUserStore from "../lib/userStore";

const Request = () => {
  const [today] = useState(() => {
    const currentDate = new Date();
    return currentDate.toISOString().split("T")[0];
  });

  const user = useUserStore((state) => state.user);

  const [minDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 8); // Tambahkan 8 hari dari hari ini
    return currentDate.toISOString().split("T")[0]; // Format ke YYYY-MM-DD
  });
  return (
    <div className="relative min-h-screen bg-home flex flex-col">
      {" "}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-0 lg:w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8">
          <h1 className="text-2xl font-bold mb-4 mt-6 font-sansation text-white">
            Halo, ajes!
          </h1>

          <div className="border rounded-[15px] border-1 border-[#7A5DDA]">
            {/*____________________________________________________ BARIS 1-3 _____________________________________________________________________ */}

            <h1 className="font-sansation mt-8 font-bold text-center text-2xl bg-gradient-to-r from-[#7A5DDA] to-[#e3e0ed] bg-clip-text text-transparent">
              Request Baru
            </h1>

            <div className="m-4 p-5">
              <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                Nama Program Kerja <span className="text-[#7A5DDA]">*</span>
              </h1>
              <input
                placeholder="FILAFEST"
                type="text"
                className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Kementrian / Kebiroan{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="PIT"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Link Grup Koordinasi Proker / Event{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="https://waa.wwa/88080"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-28">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Nama PJ Proker / Event{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="Ajes"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Kontak PJ Proker / Event{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="081246091171"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
              </div>

              {/*____________________________________________________ BARIS 4-7 _____________________________________________________________________ */}
              <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                Deskripsi Proker <span className="text-[#7A5DDA]">*</span>
              </h1>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
                className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white placeholder:text-left placeholder:top-0"
                rows="6"
                style={{ resize: "none" }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Timeline Proker <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="PKKMB
- Coming Soon: 19 Maret
- Open Tender: 21 Maret - 25 Maret
- Close Registration: 27 Maret
- FnP: 29 Maret - 31 Maret (daring)
- Pengumuman: 2 April"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Timeline Extend
                  </h1>
                  <textarea
                    placeholder="info info"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Foto Kegiatan Proker / Event{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="https://drive.google.com/ajesplisbuatporto"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Logo Proker / Event{" "}
                  </h1>
                  <input
                    placeholder="https://drive.google.com/ajesplisbuatporto"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-28">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Pilihan Divisi <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="DDM, Humas, Acara"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div> </div>
              </div>

              {/*____________________________________________________ BARIS 8-11 _____________________________________________________________________ */}
              {/* Baris 8 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Pesan Ketika Diterima{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="SELAMAT KAMU DITERIMA (>.<)

Silahkan simak pengumuman di bawah ini:

Silahkan gabung grup berikut:
https://line.me/ti/AjEsbuaTp0rtoYUK"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Pesan Ketika Ditolak{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="yahahhahaa ditolak "
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>

              {/* Baris 9 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Quotes <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="“Porto nomor sekian, UKM hindu yang utama” - Ajes"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Alur Pendaftaran <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="1. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM
2. Peserta membaca panduan Alur Pendaftaran Open Tender
3. ....
4. .... "
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
              {/* Baris 10 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Data yang dibutuhkan Proker / Event{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="Nama Lengkap :
Nama Panggilan :
Prodi :
Tempat, tanggal Lahir :
No Hp :"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Alur Pendaftaran <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <textarea
                    placeholder="1. Peserta membuka link pendaftaran yang telah disediakan oleh BEM FILKOM
2. Peserta membaca panduan Alur Pendaftaran Open Tender
3. ....
4. .... "
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                    rows="6"
                    style={{ resize: "none" }}
                  />
                </div>
              </div>

              {/* Baris 11 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-28">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Angkatan yang bisa mendaftar{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="2023 & 2024"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Link Google Drive untuk template berkas pendaftaran{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="https://drive.google.com/ajesplisbuatporto"
                    type="text"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
              </div>
              {/*____________________________________________________ BARIS 12 _____________________________________________________________________ */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Tanggal Buka Pendaftaran{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="2023 & 2024"
                    type="date"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>

                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Tanggal Tutup Pendaftaran{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="https://drive.google.com/ajesplisbuatporto"
                    type="date"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Tanggal Pengumuman <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder="https://drive.google.com/ajesplisbuatporto"
                    type="date"
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
                <div>
                  <h1 className="ml-2 mt-3 font-bold font-sansation text-white">
                    Tanggal Rilis Website{" "}
                    <span className="text-[#7A5DDA]">*</span>
                  </h1>
                  <input
                    placeholder=""
                    type="date"
                    min={minDate}
                    className="w-full bg-transparent border border-neutral-400 py-3 px-3 mt-2 mb-4 rounded-[10px] focus:border-[#7A5DDA] focus:outline-none placeholder:text-[#4F4F4F] focus:text-white"
                  />
                </div>
              </div>
              {/*____________________________________________________ BUAT REQUEST _____________________________________________________________________ */}
              <Link to="/">
                <div className="mx-auto ">
                  <button className="w-full h-full bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white py-3 rounded-md text-[18px] font-bold text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
                    Buat Request
                  </button>
                </div>
              </Link>

              {/*____________________________________________________ ADMIN VIEW _____________________________________________________________________ */}
              <Link to="/">
                <div className="mx-auto hidden ">
                  <button className="w-full h-full bg-gradient-to-r from-[#7A5DDA] to-[#493883] hover:to-white hover:from-white py-3 rounded-md text-[18px] font-bold text-white hover:text-[#7A5DDA] hover:shadow-[0_0_10px_0_#7A5DDA] duration-300">
                    Edit Request
                  </button>
                </div>
              </Link>
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
                <Link to="/">
                  <div className="mx-auto ">
                    <button className="w-full h-full bg-error py-2 rounded-md text-[18px] font-bold text-white">
                      Tolak
                    </button>
                  </div>
                </Link>
                <Link to="/">
                  <div className="mx-auto ">
                    <button
                      className="w-full h-full bg-sukses 
                     py-2 rounded-md text-[18px] font-bold text-white duration-300"
                    >
                      Terima
                    </button>
                  </div>
                </Link>
              </div>
              {/*____________________________________________________ ADMIN VIEW _____________________________________________________________________ */}
            </div>
          </div>
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
