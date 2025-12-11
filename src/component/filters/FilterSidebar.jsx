import React from 'react'
import { filtercategories, cities, conditions, priceRanges } from '../../data/data'

export default function FilterSidebar({
  category,
  setCategory,
  city,
  setCity,
  condition,
  setCondition,
  priceRange,
  setPriceRange,
}) {
  return (
    <aside className="w-full p-7 rounded-2xl bg-white shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>

      {/* CATEGORY */}
      <div className="mb-6">
        <label className="font-semibold mb-2 block">Category</label>
        <div className="space-y-2">
          {filtercategories.map((item, i) => (
            <label key={i} className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                value={item}
                checked={category === item}
                onChange={() => setCategory(item)}
                className="accent-blue-600 h-4 w-4"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* CITY */}
      <div className="mb-6">
        <label className="font-semibold mb-2 block">City</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border rounded-xl"
        >
          {cities.map((c, i) => (
            <option key={i} value={c}>
              {c === '' ? 'Select City' : c}
            </option>
          ))}
        </select>
      </div>

      {/* CONDITION */}
      <div className="mb-6">
        <label className="font-semibold mb-2 block">Condition</label>
        <div className="space-y-2">
          {conditions.map((c, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="condition"
                value={c}
                checked={condition === c}
                onChange={() => setCondition(c)}
                className="accent-blue-600 h-4 w-4"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* PRICE RANGE */}
      <div className="mb-6">
        <label className="font-semibold mb-2 block">Price Range</label>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceRange.min === range.min}
                onChange={() => setPriceRange(range)}
                className="accent-blue-600 h-4 w-4"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {/* RESET */}
      <button
        onClick={() => {
          setCategory('All Categories')
          setCity('')
          setCondition('All')
          setPriceRange({ min: 0, max: 999999 })
        }}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold"
      >
        Reset Filters
      </button>
    </aside>
  )
}
