import { FiBell, FiUser } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="h-16 flex items-center justify-between px-8 border-b border-white/10">
      <h2 className="text-xl font-semibold">Admin Dashboard</h2>

      <div className="flex items-center gap-6">
        <FiBell className="text-xl cursor-pointer" />
        <div className="flex items-center gap-2">
          <FiUser />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
