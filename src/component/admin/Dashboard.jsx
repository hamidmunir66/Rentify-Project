import StatCard from "../../components/admin/StatCard"
import { FiUsers, FiBriefcase, FiBox, FiDollarSign } from "react-icons/fi"

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="12,480" icon={FiUsers} />
        <StatCard title="Merchants" value="2,140" icon={FiBriefcase} />
        <StatCard title="Listings" value="8,932" icon={FiBox} />
        <StatCard title="Revenue" value="₹1.2M" icon={FiDollarSign} />
      </div>
    </div>
  )
}

export default Dashboard
