import { MenuActive } from "./menu.active.jsx";
import background from "../../../assets/images/background-2.png";

export default function ReportRubbish() {
  return (
    <main className="bg-slate-50 font-inter">
      <section className="container mx-auto grid grid-cols-12 font-inter py-20">
        <div className="col-span-12 flex gap-x-5 mb-5 px-4">
          <MenuActive label="Laporan Sampah" href="/report" />
          <MenuActive label="Riwayat Laporan" href="/history-report" />
        </div>

        <div className="col-span-3 min-h-screen rounded-s-xl overflow-hidden">
          <img src={background} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="col-span-9 rounded-e-xl bg-white shadow-lg">
          <div className="relative overflow-x-auto sm:rounded-e-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap w-6">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Laporan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Laporan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">22/11/2022</td>
                  <td className="px-6 py-4">
                    Jl Jend Sudirman Kav 29-31 World Trade Center, Dki Jakarta
                  </td>
                  <td className="px-6 py-4">Report Rubbish</td>
                  <td className="px-6 py-4">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Ditolak
                    </span>
                  </td>
                </tr>

                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    2
                  </th>
                  <td className="px-6 py-4">22/11/2022</td>
                  <td className="px-6 py-4">
                    Jl Jend Sudirman Kav 29-31 World Trade Center, Dki Jakarta
                  </td>
                  <td className="px-6 py-4">Report Rubbish</td>
                  <td className="px-6 py-4">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      Diproses
                    </span>
                  </td>
                </tr>

                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    3
                  </th>
                  <td className="px-6 py-4">22/11/2022</td>
                  <td className="px-6 py-4">
                    Jl Jend Sudirman Kav 29-31 World Trade Center, Dki Jakarta
                  </td>
                  <td className="px-6 py-4">Report Rubbish</td>
                  <td className="px-6 py-4">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Diterima
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
