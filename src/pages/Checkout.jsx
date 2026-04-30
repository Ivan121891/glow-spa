import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed! Thank you for shopping with Glō.");
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-20 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-stone-900 mb-3">Nothing to Checkout</h1>
        <p className="text-stone-500 mb-8">Your cart is empty. Add some products first.</p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pt-12">
      <h1 className="text-3xl font-bold text-stone-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Billing Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <h2 className="font-bold text-stone-900 text-lg">Contact</h2>
            <input
              type="email"
              required
              className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
              placeholder="Email"
            />
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
              placeholder="Full Name"
            />
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <h2 className="font-bold text-stone-900 text-lg">Shipping</h2>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
              placeholder="Address"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
                placeholder="City"
              />
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
                placeholder="ZIP Code"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4">
            <h2 className="font-bold text-stone-900 text-lg">Payment</h2>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
              placeholder="Card number"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
                placeholder="MM / YY"
              />
              <input
                type="text"
                required
                className="w-full px-4 py-2.5 border border-stone-300 rounded-xl text-sm focus:outline-none focus:border-rose-400"
                placeholder="CVC"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-rose-400 hover:bg-rose-500 text-white font-medium rounded-full transition-colors text-base cursor-pointer"
          >
            Place Order &mdash; ${totalPrice.toFixed(2)}
          </button>
        </form>

        {/* Order Summary */}
        <div className="md:col-span-2">
          <div className="bg-stone-50 rounded-2xl p-6 sticky top-24">
            <h2 className="font-bold text-stone-900 text-lg mb-4">Order Summary</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-stone-600">
                    {item.image} {item.name} <span className="text-stone-400">x{item.qty}</span>
                  </span>
                  <span className="font-medium text-stone-800">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-200 mt-4 pt-4 flex items-center justify-between font-bold text-stone-900">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
