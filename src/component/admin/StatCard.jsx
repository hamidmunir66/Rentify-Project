const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <h3 className="text-3xl font-bold mt-2">{value}</h3>
        </div>
        <Icon className="text-3xl text-blue-500" />
      </div>
    </div>
  )
}

export default StatCard
