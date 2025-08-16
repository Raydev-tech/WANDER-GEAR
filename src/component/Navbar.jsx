import React, { useEffect, useState } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      className="bg-white border-b shadow-sm fixed w-full top-0 z-50"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo & Menu */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <a href="/">
            <div className="text-2xl font-extrabold tracking-wide text-gray-800">
              Wander<span className="text-blue-600">Gear</span>
            </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 text-gray-700 font-medium">
              <a href="/" className="hover:text-blue-600 transition text-sm">
                Home
              </a>
              <a
                href="/products"
                className="hover:text-blue-600 transition text-sm"
              >
                Products
              </a>
              <a
                href="/about"
                className="hover:text-blue-600 transition text-sm"
              >
                About
              </a>
              <a
                href="/contact"
                className="hover:text-blue-600 transition text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right Side - Icons & Login */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition">
              <User className="h-5 w-5" />
            </button>
            <a href="/cart">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                0
              </span>
            </button>
            </a>
            <a href="/login">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-blue-700 transition">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="bg-white w-64 h-full p-6 shadow-lg relative"
            data-aos="fade-right"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="mt-10 flex flex-col gap-6 text-gray-700 font-medium">
              <a href="/" className="hover:text-blue-600 transition text-base">
                Home
              </a>
              <a
                href="/products"
                className="hover:text-blue-600 transition text-base"
              >
                Products
              </a>
              <a
                href="/about"
                className="hover:text-blue-600 transition text-base"
              >
                About
              </a>
              <a
                href="/contact"
                className="hover:text-blue-600 transition text-base"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
