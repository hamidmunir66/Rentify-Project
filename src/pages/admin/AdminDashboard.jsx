import { stats } from "../../data/data";
const AdminDashboard = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition" >
              <p className="text-gray-500">{item.label}</p>
              <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
