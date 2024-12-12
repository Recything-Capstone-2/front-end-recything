import React from "react";
import { DashboardAdminLayout } from "../../dashboard";
import DataUsersTabel from "./DataUsersTabel";

const AdminDataUsersPage = () => {
  return (
    <div>
      <DashboardAdminLayout className="bg-green-50" header="Data Pengguna">
        <DataUsersTabel />
      </DashboardAdminLayout>
    </div>
  );
};

export default AdminDataUsersPage;
