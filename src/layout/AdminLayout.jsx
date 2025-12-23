import Sidebar from "../component/admin/Sidebar";
import Topbar from "../component/admin/Topbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="min-h-screen flex bg-[#0b0f17] text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="p-8 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
