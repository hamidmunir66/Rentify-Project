import { merchantNotifications } from "../../data/data";

const Notifications = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

      <ul className="space-y-3 text-gray-600">
        {merchantNotifications.map((item) => (
          <li key={item.id}>• {item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
