import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-3">Your Cart is Empty</h1>
        <p className="text-stone-500 mb-8">Looks like you haven't added anything yet.</p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-stone-900">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-sm text-stone-500 hover:text-rose-500 transition-colors cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-stone-200 p-5 flex items-center gap-5"
          >
            <div className="text-3xl w-10 text-center">{item.image}</div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-stone-900">{item.name}</h3>
              <p className="text-sm text-stone-500">${item.price} each</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-rose-300 transition-colors cursor-pointer"
              >
                &minus;
              </button>
              <span className="w-8 text-center font-medium text-stone-800">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:border-rose-300 transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
            <div className="text-right min-w-[80px]">
              <p className="font-bold text-stone-800">${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-stone-400 hover:text-rose-500 transition-colors cursor-pointer"
              title="Remove"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-stone-50 rounded-2xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-stone-600">Subtotal</span>
          <span className="font-semibold text-stone-800">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mb-4 text-sm text-stone-500">
          <span>Shipping</span>
          <span>Calculated at checkout</span>
        </div>
        <div className="border-t border-stone-200 pt-4 flex items-center justify-between text-lg">
          <span className="font-bold text-stone-900">Total</span>
          <span className="font-bold text-stone-900">${totalPrice.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="mt-6 block w-full py-3 bg-rose-400 hover:bg-rose-500 text-white text-center font-medium rounded-full transition-colors"
        >
          Proceed to Checkout
        </Link>
        <Link
          to="/products"
          className="mt-3 block w-full py-3 border border-stone-300 text-stone-700 text-center font-medium rounded-full transition-colors hover:border-rose-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
