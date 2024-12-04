import Button from "../../../components/ui/Button.jsx";
import { DashboardAdminLayout } from "../../dashboard/index.js";
import { MenuActive } from "../../report-rubbish/components/menu.active.jsx";

const DashboardAdminReportReject = () => {
  return (
    <div>
      <DashboardAdminLayout>
      <h1 className="text-3xl font-medium px-4">Data Pelaporan</h1>
      <div className="flex px-4 gap-x-6 my-3">
        <MenuActive label={"Semua Laporan"} href={"/dashboard/report/all"} />
        <MenuActive label={"Diterima"} href={"/dashboard/report/approve"} />
        <MenuActive label={"Diproses"} href={"/dashboard/report/process"} />
        <MenuActive label={"Selesai"} href={"/dashboard/report/done"} />
        <MenuActive label={"Ditolak"} href={"/dashboard/report/reject"} />
      </div>
      <div className="relative overflow-x-auto sm:rounded-e-lg px-2">
        <table className="w-full table-fixed text-sm text-left text-gray-500 border-collapse">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 whitespace-nowrap w-12">No</th>
              <th scope="col" className="px-6 py-3 w-60">Photo</th>
              <th scope="col" className="px-6 py-3 w-40">Tanggal Laporan</th>
              <th scope="col" className="px-6 py-3 w-40">Nama Pelapor</th>
              <th scope="col" className="px-6 py-3 w-52">Lokasi</th>
              <th scope="col" className="px-6 py-3 w-96">Deskripsi</th>
              <th scope="col" className="px-6 py-3 w-40">Jenis Laporan</th>
              <th scope="col" className="px-6 py-3 w-32">status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">1</th>
              <td className="px-6 py-4">
                <div className="size-52">
                  <img src="https://i.pinimg.com/736x/2e/58/b8/2e58b8908b064f3edbaa521a0e5e0144.jpg" alt="" className="w-full object-cover h-full" />
                </div>
              </td>
              <td className="px-6 py-4">22/11/2022</td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">Jl Jend Sudirman Kav 29-31 World Trade Center, Dki Jakarta</td>
              <td className="px-6 py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, nam voluptates nihil molestiae atque, hic facilis, nostrum voluptas dolore consectetur impedit itaque sint fuga consequuntur iste corrupti nulla ut voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ullam laboriosam blanditiis optio repudiandae porro incidunt deleniti architecto, quia magnam, sequi eius, omnis veniam. Harum quos a totam doloremque natus.</td>
              <td className="px-6 py-4">Report Rubbish</td>
              <td className="px-6 py-4">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Ditolak
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </DashboardAdminLayout>
    </div>
  );
};

export default DashboardAdminReportReject;