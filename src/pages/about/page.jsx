import { Link } from "react-router-dom";

export default function AboutPage() {
  // SVG icons
  const Heart = () => (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1569 3 12.5 4.34315 12.5 6C12.5 4.34315 13.8431 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" />
    </svg>
  );
  const Award = () => (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
  const Users = () => (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M9 21v-2a4 4 0 0 1 3-3.87" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
  const Truck = () => (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );

  const team = [
    {
      name: "Daniel Tomberg",
      role: "Founder & CEO",
      image: "/server/public/ceo.JPG",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "/server/public/ceo.JPG",
    },
    {
      name: "Justin Rodriguez",
      role: "Customer Experience",
      image: "/server/public/ceo.JPG",
    },
    {
      name: "David Kim",
      role: "Logistics Manager",
      image: "/server/public/ceo.JPG",
    },
  ];

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">About InternetMarket</h1>
        <div className="flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>About</span>
        </div>
      </div>
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-500 mb-4">
            InternetMarket was founded to revolutionize the way people discover
            and shop for electronics, gadgets, and lifestyle products online.
            Our mission is to make cutting-edge technology and top brands
            accessible to everyone, everywhere.
          </p>
          <p className="text-gray-500 mb-4">
            From humble beginnings, InternetMarket has grown into a trusted
            global marketplace, connecting customers with the latest
            smartphones, laptops, wearables, and must-have accessories. We
            partner with leading brands and innovative startups to bring you a
            curated selection of quality products at competitive prices.
          </p>
          <p className="text-gray-500">
            At InternetMarket, we are passionate about technology and dedicated
            to delivering an exceptional shopping experience. Our team is
            committed to fast shipping, responsive support, and ensuring every
            customer finds exactly what they need to enhance their digital
            lifestyle.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src="server/public/internetmarket.png"
            alt="InternetMarket"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Team Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            The passionate people behind InternetMarket who work tirelessly to
            bring the best products to you and your pets.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border overflow-hidden"
            >
              <div className="relative h-64 w-full bg-gray-100 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
