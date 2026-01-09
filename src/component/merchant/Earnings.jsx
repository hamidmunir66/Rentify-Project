import { merchantEarnings } from "../../data/data";
import EarningCard from "./EarningCard";

const Earnings = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-6">Earnings</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <EarningCard label="Today" value={merchantEarnings.today} />
          <EarningCard label="This Week" value={merchantEarnings.week} />
          <EarningCard label="This Month" value={merchantEarnings.month} />
        </div>
      </div>
    </>
  );
};



export default Earnings;
