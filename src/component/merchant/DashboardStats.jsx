import { merchantStats } from "../../data/data";
import StatCard from "./StatCard";

const DashboardStats = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Total Listings" value={merchantStats.totalListings} />
        <StatCard title="Active" value={merchantStats.activeListings} />
        <StatCard title="Rented" value={merchantStats.rentedListings} />
        <StatCard title="Available" value={merchantStats.availableListings} />
      </div>
    </>
  );
};

export default DashboardStats;
