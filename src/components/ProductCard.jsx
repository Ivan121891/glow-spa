import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col hover:shadow-lg hover:border-rose-200 transition-all duration-300">
      <div className="text-5xl mb-4">{product.image}</div>
      <h3 className="font-semibold text-stone-900 text-lg">{product.name}</h3>
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
  );
}
