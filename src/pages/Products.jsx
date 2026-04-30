import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "../data";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get("cat");
  const [active, setActive] = useState(catParam || "all");

  useEffect(() => {
    if (catParam) setActive(catParam);
  }, [catParam]);

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);
  const activeCat = categories.find((c) => c.id === active);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-rose-50 via-white to-amber-50 pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Products</h1>
          <p className="text-stone-500 text-lg max-w-xl mx-auto">
            Clean, effective skincare for every skin type and concern.
          </p>
          {/* Stats row */}
          <div className="flex justify-center gap-8 mt-10">
            <div>
              <p className="text-2xl font-bold text-rose-400">{products.length}+</p>
              <p className="text-xs text-stone-400">Products</p>
            </div>
            <div className="w-px bg-stone-200" />
            <div>
              <p className="text-2xl font-bold text-rose-400">{categories.length}</p>
              <p className="text-xs text-stone-400">Categories</p>
            </div>
            <div className="w-px bg-stone-200" />
            <div>
              <p className="text-2xl font-bold text-rose-400">100%</p>
              <p className="text-xs text-stone-400">Clean Beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY GRID ===== */}
      <section className="max-w-6xl mx-auto px-4 -mt-6 relative z-10 mb-10">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActive("all")}
              className={`px-5 py-2.5 text-sm rounded-full transition-colors cursor-pointer font-medium ${
                active === "all"
                  ? "bg-rose-400 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-1.5 px-5 py-2.5 text-sm rounded-full transition-colors cursor-pointer font-medium ${
                  active === cat.id
                    ? "bg-rose-400 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY DESCRIPTION ===== */}
      {activeCat && (
        <section className="max-w-6xl mx-auto px-4 mb-8">
          <div className="bg-gradient-to-r from-rose-50 to-stone-50 rounded-2xl p-6 md:p-8 flex items-start gap-4">
            <span className="text-3xl">{activeCat.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-stone-900">{activeCat.name}</h2>
              <p className="text-stone-500 text-sm mt-1">{activeCat.description}</p>
              <p className="text-xs text-stone-400 mt-2">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
            </div>
          </div>
        </section>
      )}

      {/* ===== PRODUCT GRID ===== */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-stone-900">No products found</h3>
            <p className="text-stone-500 text-sm mt-1">Try selecting a different category</p>
          </div>
        )}
      </section>
    </div>
  );
}