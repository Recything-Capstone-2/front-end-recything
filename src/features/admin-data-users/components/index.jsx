import { DashboardAdminLayout } from "../../dashboard";
import DataUsersTabel from "./DataUsersTabel";

const AdminDataUsersPage = () => {
  return (
    <div>
      <DashboardAdminLayout className="bg-green-50" header="Data Pengguna">
        <DataUsersTabel className="max-w-[1440px]" />
      </DashboardAdminLayout>
    </div>
  );
};

export default AdminDataUsersPage;
