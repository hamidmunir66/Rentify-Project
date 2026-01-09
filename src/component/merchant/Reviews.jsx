import { merchantReviews } from "../../data/data";

const Reviews = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Product Reviews</h2>
        <div className="space-y-4">
          {merchantReviews.map((review) => (
            <div key={review.id} className="border rounded-xl p-4">
              <p className="font-medium">{review.product}</p>
              <p className="text-yellow-500 text-sm">
                {"★".repeat(review.rating)}
              </p>
              <p className="text-gray-600 text-sm mt-1">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
