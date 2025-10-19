import React from "react";
import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <>
      <aside className="w-full max-w-[270px] hidden lg:block">Sidebar</aside>
      <aside className="children">
        <Outlet></Outlet>
      </aside>
    </>
  );
}

export default AdminLayout;
