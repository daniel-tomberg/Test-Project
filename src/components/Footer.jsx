import { Link } from "react-router-dom";

export default function Footer() {
  // SVG social icons
  const Facebook = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
  const Instagram = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
  const Twitter = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.99 4.07 7.13 1.64 4.16c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.91 3.99 2.94A8.6 8.6 0 0 1 2 19.54c-.65 0-1.28-.04-1.9-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" />
    </svg>
  );

  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 w-12 h-12 flex items-center justify-center">
              <span className="sr-only">InternetMarket Logo</span>
            </div>
            <span className="text-2xl font-bold">InternetMarket</span>
          </div>
          <p className="text-sm text-gray-500">
            Your one-stop shop for all pet needs. Quality products for your
            furry friends.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Facebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Instagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Shop</span>
          <Link to="/shop" className="hover:text-primary">
            All Products
          </Link>
          <Link to="/category/food" className="hover:text-primary">
            Dog Food
          </Link>
          <Link to="/category/accessories" className="hover:text-primary">
            Accessories
          </Link>
          <Link to="/category/toys" className="hover:text-primary">
            Toys
          </Link>
          <Link to="/category/grooming" className="hover:text-primary">
            Grooming
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Company</span>
          <Link to="/about" className="hover:text-primary">
            About Us
          </Link>
          <Link to="/careers" className="hover:text-primary">
            Careers
          </Link>
          <Link to="/press" className="hover:text-primary">
            Press
          </Link>
          <Link to="/blog" className="hover:text-primary">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Support</span>
          <Link to="/help" className="hover:text-primary">
            Help Center
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact Us
          </Link>
          <Link to="/returns" className="hover:text-primary">
            Returns & Refunds
          </Link>
          <Link to="/delivery" className="hover:text-primary">
            Delivery Information
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold mb-2">Contact</span>
          <span className="text-sm text-gray-500">
            123 Pet Street, Dogville
          </span>
          <span className="text-sm text-gray-500">New York, NY 10001</span>
          <span className="text-sm text-gray-500">Email: info@petdo.com</span>
          <span className="text-sm text-gray-500">Phone: (123) 456-7890</span>
        </div>
      </div>
      <div className="border-t py-6 text-center text-gray-400 text-sm flex flex-col md:flex-row items-center justify-between container mx-auto px-4">
        <span>© 2025 PetDo. All rights reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:text-primary">
            Cookies Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
