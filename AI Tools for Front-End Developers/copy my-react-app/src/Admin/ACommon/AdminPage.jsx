import React, { useState } from "react";
import MenuAdd from "./AddMenu";
import AdminTable from "./AdminTable";
function AdminPage() {

  const [refresh, setRefresh] = useState(false);

  return (
    <>
      <MenuAdd />
      <AdminTable />
    </>
  );
}

export default AdminPage;