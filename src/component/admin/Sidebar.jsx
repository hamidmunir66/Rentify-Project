import { NavLink } from "react-router-dom"
import { menu } from "../../data/data"
const Sidebar = () => {
  return (
    <>
    <aside className="w-64 bg-[#111827] border-r border-white/10 p-6">
      <h1 className="text-2xl font-extrabold mb-10">Admin Panel</h1>

      <nav className="space-y-2">
        {menu.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-white/5"
              }`
            }
          >
            <Icon size={18} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
    </>
  )
}

export default Sidebar
