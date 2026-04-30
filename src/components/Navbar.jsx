import { Link, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/facial", label: "Facial Treatments" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-stone-900">
          Glō <span className="text-rose-400">✦</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "text-rose-500"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/cart"
          className="relative flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-300 text-sm font-medium text-stone-700 hover:border-rose-300 hover:text-rose-500 transition-colors"
        >
          Cart
          {totalItems > 0 && (
            <span className="bg-rose-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
