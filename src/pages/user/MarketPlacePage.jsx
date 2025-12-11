import React, { useState } from "react";
import FilterSidebar from "../../component/filters/FilterSidebar";
import ProductGrid from "../../component/products/ProductGrid";
import { categoriesProducts, priceRanges } from "../../data/data";

export default function MarketplacePage() {
  const [category, setCategory] = useState("All Categories");
  const [city, setCity] = useState("");
  const [condition, setCondition] = useState("All");
  // default to full range (use first priceRanges entry "Any")
  const defaultRange = priceRanges[0] || { min: 0, max: 999999 };
  const [priceRange, setPriceRange] = useState(defaultRange);

  return (
    <div className="min-h-screen bg-[#f7f8fb] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* LEFT SIDEBAR (glass style) */}
        <div className="lg:col-span-1">
          <FilterSidebar
            category={category}
            setCategory={setCategory}
            city={city}
            setCity={setCity}
            condition={condition}
            setCondition={setCondition}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* PRODUCTS */}
        <div className="lg:col-span-3">
          <ProductGrid
            products={categoriesProducts}
            selectedCategory={category}
            selectedCity={city}
            selectedCondition={condition}
            selectedPrice={priceRange}
          />
        </div>
      </div>
    </div>
  );
}
