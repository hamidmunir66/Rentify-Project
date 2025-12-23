const EarningCard = ({ label, value }) => {
  return (
    <>
      <div className="bg-gray-50 p-5 rounded-xl">
        <p className="text-gray-500">{label}</p>
        <h3 className="text-2xl font-bold mt-1">₹{value}</h3>
      </div>
    </>
  );
};
export default EarningCard;
