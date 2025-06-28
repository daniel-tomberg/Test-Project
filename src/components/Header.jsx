import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );
  // SVG icons
  const CartIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
  const SearchIcon = () => (
    <svg
      className="h-4 w-4 text-gray-400 absolute left-2.5 top-2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
  const ChevronDown = () => (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
  const Globe = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    </svg>
  );
  const UserIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
    </svg>
  );
  const MenuIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
  const XIcon = () => (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 w-10 h-10 flex items-center justify-center">
              <span className="sr-only">InternetMarket Logo</span>
            </div>
            <span className="text-xl font-bold">InternetMarket</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Shop
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 focus:outline-none">
                Categories <ChevronDown />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                <Link
                  to="/category/food"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Food
                </Link>
                <Link
                  to="/category/accessories"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Accessories
                </Link>
                <Link
                  to="/category/toys"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Toys
                </Link>
                <Link
                  to="/category/grooming"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Grooming
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <div className="relative">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[250px] rounded-full bg-gray-100 border border-gray-200 h-10 focus:outline-none"
              />
            </div>
          </div>
          <button
            className="relative hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
            title="Language"
          >
            <Globe />
          </button>
          <Link
            to="/login"
            className="relative hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
          >
            <UserIcon />
            <span className="sr-only">Sign In</span>
          </Link>
          <button
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
            onClick={() => dispatch(openCart())}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold">
                {cartCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </button>
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-white">
          <div className="relative mb-4">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-8 rounded-full bg-gray-100 border border-gray-200 h-10 focus:outline-none"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Shop
            </Link>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-medium transition-colors hover:text-blue-600 select-none">
                Categories <ChevronDown />
              </summary>
              <nav className="mt-2 ml-4 flex flex-col space-y-2">
                <Link
                  to="/category/food"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Food
                </Link>
                <Link
                  to="/category/accessories"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Accessories
                </Link>
                <Link
                  to="/category/toys"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Toys
                </Link>
                <Link
                  to="/category/grooming"
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  Grooming
                </Link>
              </nav>
            </details>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
