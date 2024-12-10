import Button from "../../../components/ui/Button.jsx";
import FormSelect from "../../../components/ui/FormSelect.jsx";
import { DashboardAdminLayout } from "../../dashboard/index.js";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";
import useAdminPoints from "../hooks/useAdminPoints.jsx";

const options = [
  { value: "", label: "Opsi Tukar" },
  { value: "1000", label: "1000" },
  { value: "5000", label: "5000" },
  { value: "10000", label: "10000" },
];

export default function AdminManageCoins() {
  const { points, userCoins, loading, loadingAccept, error, handleCoinsChange, handleAcceptCoins } = useAdminPoints();

  return (
    <DashboardAdminLayout>
      <div className="relative max-w-[1440px] overflow-x-auto rounded-lg py-10 px-24 bg-green-50">
        {loading ? (
          <p>
            <LoadingSpinner />
          </p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="w-full text-sm text-left text-black-neutral08 border-collapse rounded-lg">
            <thead className="text-xs text-black-neutral08 uppercase bg-primary-01 rounded-t-lg">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 whitespace-nowrap w-12 rounded-tl-lg"
                >
                  No
                </th>
                <th scope="col" className="px-6 py-4">
                  Nama
                </th>
                <th scope="col" className="px-6 py-4">
                  Email
                </th>
                <th scope="col" className="px-6 py-4 whitespace-nowrap">
                  No Telepon
                </th>
                <th scope="col" className="px-6 py-4">
                  Jumlah Koin
                </th>
                <th scope="col" className="px-6 py-4 w-44">
                  Opsi Tukar
                </th>
                <th scope="col" className="px-6 py-4">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {points.map((point, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-primary-01"}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{point.nama_lengkap}</td>
                  <td className="px-6 py-4">{point.email}</td>
                  <td className="px-6 py-4">{point.no_telepon}</td>
                  <td className="px-6 py-4">{point.points}</td>
                  <td className="px-6 py-4">
                    <FormSelect
                      id={`coins-${index}`}
                      options={options}
                      onChange={(e) => handleCoinsChange(e, point.user_id)}
                    />
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleAcceptCoins(point.user_id)}
                      disabled={
                        !userCoins[point.user_id] ||
                        point.points < userCoins[point.user_id]
                      }
                    >
                      OK
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </DashboardAdminLayout>
  );
}
