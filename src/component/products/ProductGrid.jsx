import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products = [],
  selectedCategory,
  selectedCity,
  selectedCondition,
  selectedPrice,
}) {
  const filtered = products.filter((p) => {
    const matchCategory =
      selectedCategory === "All Categories" ||
      (p.category ? p.category === selectedCategory : true);

    const matchCity = !selectedCity || p.city === selectedCity;
    const matchCondition =
      selectedCondition === "All" || p.condition === selectedCondition;
    const matchPrice =
      p.price >= selectedPrice.min && p.price <= selectedPrice.max;

    return matchCategory && matchCity && matchCondition && matchPrice;
  });

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full text-gray-600 p-8 bg-white rounded-xl border">
              No products match these filters.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
