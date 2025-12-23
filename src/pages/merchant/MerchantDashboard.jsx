import MyListings from "../../component/merchant/MyListings";
import DashboardStats from "../../component/merchant/DashboardStats";
import Earnings from "../../component/merchant/Earnings";
import Notifications from "../../component/merchant/Notifications";
import Reviews from "../../component/merchant/Reviews";
import Requests from "../../component/merchant/Requests";

const MerchantDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-8 py-8 space-y-12">
      <DashboardStats />
      <Requests />
      <MyListings />
      <Earnings />
      <Notifications />
      <Reviews />
    </div>
  );
};

export default MerchantDashboard;
