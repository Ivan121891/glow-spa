import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">Glō <span className="text-rose-400">✦</span></h3>
          <p className="text-sm leading-relaxed">Your destination for premium skincare and facial treatments. Radiate from within.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Shop</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/products" className="hover:text-white transition-colors">All Products</Link>
            <Link to="/facial" className="hover:text-white transition-colors">Treatments</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Contact</h4>
          <div className="flex flex-col gap-1 text-sm">
            <span>hello@glowspa.com</span>
            <span>+1 (555) 123-4567</span>
            <span>123 Beauty Lane, Suite 200</span>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-800 text-center text-xs py-4 text-stone-500">
        &copy; 2026 Glō. All rights reserved.
      </div>
    </footer>
  );
}
