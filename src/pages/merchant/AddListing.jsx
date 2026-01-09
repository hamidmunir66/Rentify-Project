import {
  FaCamera,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaTag,
  FaUpload,
} from "react-icons/fa";
import { categories } from "../../data/data";

const AddListing = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f7f8fb] px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-10 space-y-14">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold text-gray-900">
              Add New Listing
            </h1>
            <p className="text-gray-500 text-lg">
              Share your item and start earning with Rentify
            </p>
          </div>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaTag className="text-blue-600" />
              Basic Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Item Title" className="input" />
              <select className="input ">
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              rows="4"
              placeholder="Detailed description of your item"
              className="input"
            />
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold items-center flex gap-3">
              <FaMoneyBillWave className="text-green-600" />
              Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <input
                type="number"
                placeholder="Price / Day"
                className="input"
              />
              <input
                type="number"
                placeholder="Price / Week"
                className="input"
              />
              <input
                type="number"
                placeholder="Price / Month"
                className="input"
              />
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold items-center flex gap-3">
              <FaCamera className="text-purple-600" />
              Upload Images
            </h2>
            <label className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition ">
              <FaUpload className="text-4xl text-gray-400 mb-3" />
              <span className="text-gray-500">Click to upload item images</span>
              <input type="file" multiple hidden />
            </label>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold items-center flex gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              Location
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="City" className="input" />
              <input
                type="text"
                placeholder="Area / Address"
                className="input"
              />
            </div>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaShieldAlt className="text-orange-500" />
              Safety & Rules
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <select className="input">
                <option value="">Item Condition</option>
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>

              <select className="input">
                <option value="">ID Required?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <textarea
              rows="3"
              placeholder="Any rental rules or security instructions"
              className="input"
            />
          </section>
          <div className="pt-6 flex justify-end">
            <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition">
              Publish Listing
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddListing;
