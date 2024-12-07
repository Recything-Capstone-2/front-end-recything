import { useState } from "react";
import Button from "../../../components/ui/Button.jsx";
import FormSelect from "../../../components/ui/FormSelect.jsx";
import { DashboardAdminLayout } from "../../dashboard/index.js";
import useUser from "../../../store/userStore.js";

const options = [
  { value: '', label: 'Opsi Tukar' },
  { value: '1000', label: '1000' },
  { value: '5000', label: '5000' },
  { value: '10000', label: '10000' },
]

export default function AdminManageCoins() {
  const { user } = useUser();
  const [coins, setCoins] = useState('');

  const handleCoinsChange = (e) => {
    setCoins(e.target.value);
  }

  const handleSubmit = () => {
    console.log(user.id_user);
    console.log(coins);
  }

  return (
    <DashboardAdminLayout>
      <div className="relative max-w-[1440px] overflow-x-auto rounded-lg py-10 px-24 bg-green-50">
        <table className="w-full table-fixed text-sm text-left text-black-neutral08 border-collapse rounded-lg">
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
                Nomor Telepon
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
            <tr>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">John Doe</td>
              <td className="px-6 py-4">jgK3l@example.com</td>
              <td className="px-6 py-4">1234567890</td>
              <td className="px-6 py-4">100000</td>
              <td className="px-6 py-4">
                <FormSelect id={"coins"} options={options} onChange={handleCoinsChange} />
              </td>
              <td className="px-6 py-4 flex items-center justify-center">
                <Button variant="primary" size="sm" onClick={() => handleSubmit()} disabled={!coins} >OK</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardAdminLayout>
  );
}
