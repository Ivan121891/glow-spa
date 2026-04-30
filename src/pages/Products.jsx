import { useState } from "react";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

const categories = ["all", "serums", "moisturizers", "masks", "toners", "tools", "accessories"];

export default function Products() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-stone-900">Our Products</h1>
        <p className="text-stone-500 mt-2">Clean skincare for every skin type</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm rounded-full capitalize transition-colors cursor-pointer ${
              active === cat
                ? "bg-rose-400 text-white"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
