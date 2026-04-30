import { useCart } from "../contexts/CartContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-stone-200 flex flex-col hover:shadow-lg hover:border-rose-200 transition-all duration-300 overflow-hidden">
      {/* Image container */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-stone-50 p-8 flex items-center justify-center h-52">
        <div className="w-28 h-28">
          <ProductImage image={product.image} />
        </div>
      </div>
      {/* Content */}
      <div className="p-5 pt-0 flex flex-col flex-1">
        <span className="text-xs text-rose-500 font-medium uppercase tracking-wide mt-4 mb-1">
          {product.category.replace("-", " & ")}
        </span>
        <h3 className="font-semibold text-stone-900">{product.name}</h3>
        <p className="text-stone-500 text-sm mt-1 leading-relaxed flex-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-800">${product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="px-4 py-2 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-colors cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}