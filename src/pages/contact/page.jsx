import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            {formSubmitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-lg mb-2">Thank You!</h3>
                <p>
                  Your message has been sent successfully. We'll get back to you
                  as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="block font-medium">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="w-full border rounded px-3 py-2"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="block font-medium">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="w-full border rounded px-3 py-2"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block font-medium">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border rounded px-3 py-2"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block font-medium">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border rounded px-3 py-2"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Status</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="product">Product Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full border rounded px-3 py-2 min-h-[120px]"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {/* MapPin icon */}
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21C12 21 5 13.5 5 9.5C5 6.46243 7.46243 4 10.5 4C13.5376 4 16 6.46243 16 9.5C16 13.5 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <address className="not-italic text-gray-500">
                    123 Pet Street
                    <br />
                    Dogville, NY 10001
                    <br />
                    United States
                  </address>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {/* Phone icon */}
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-500">
                    <a href="tel:+11234567890" className="hover:text-primary">
                      +1 (123) 456-7890
                    </a>
                  </p>
                  <p className="text-gray-500">
                    <a href="tel:+18005551234" className="hover:text-primary">
                      +1 (800) 555-1234
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {/* Mail icon */}
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-500">
                    <a
                      href="mailto:info@petdo.com"
                      className="hover:text-primary"
                    >
                      info@petdo.com
                    </a>
                  </p>
                  <p className="text-gray-500">
                    <a
                      href="mailto:support@petdo.com"
                      className="hover:text-primary"
                    >
                      support@petdo.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {/* Clock icon */}
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-500">Monday - Friday: 9am - 6pm</p>
                  <p className="text-gray-500">Saturday: 10am - 4pm</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              {/* Twitter */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                  <rect x="8" y="9" width="4" height="12" />
                  <circle cx="10" cy="4" r="2" />
                  <rect x="14" y="9" width="4" height="12" />
                  <circle cx="16" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
        <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <p className="text-gray-400">Map would be displayed here</p>
        </div>
      </div>
    </div>
  );
}
