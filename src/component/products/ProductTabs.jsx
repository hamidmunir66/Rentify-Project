import React, { useState } from "react";

const ProductTabs = ({ description, specs }) => {
  const [tab, setTab] = useState("desc");

  return (
    <>
      <div className="border rounded-2xl p-6">
        <div className="flex gap-6 mb-6">
          {["desc", "specs"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full cursor-pointer ${
                tab === t ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {t === "desc" ? "Description" : "Specifications"}
            </button>
          ))}
        </div>

        {tab === "desc" && <p className="text-gray-600">{description}</p>}

        {tab === "specs" && (
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {specs.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductTabs;
