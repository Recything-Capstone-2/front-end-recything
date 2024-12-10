import React from "react";
import { DashboardAdminLayout } from "../../dashboard";
import ArticlesTable from "./ArticlesTable";

const AdminArticlesPage = () => {
  return (
    <div>
      <DashboardAdminLayout className="bg-blue-50">
        <ArticlesTable />
      </DashboardAdminLayout>
    </div>
  );
};

export default AdminArticlesPage;
