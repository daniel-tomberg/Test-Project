import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getProductField(product, field, fallback) {
  return product[field] !== undefined ? product[field] : fallback;
}

const SearchResultsPage = ({ products }) => {
  const query = useQuery();
  const search = query.get("search") || "";
  const dispatch = useDispatch();

  // Filter products by name (case-insensitive, partial match)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // SVG icons
  const CartIcon = () => (
    <svg
      className="h-4 w-4"
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span>Showing results for</span>
          <span className="mx-2 font-semibold text-black">"{search}"</span>
        </div>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500 mb-4">Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
          {filteredProducts.map((product) => {
            const price = product.prices?.[0]?.amount || 0;
            const offerPrice = product.offerPrice || (price * 0.85).toFixed(2);
            const rating = getProductField(product, "rating", 4);
            const ratingCount = getProductField(
              product,
              "ratingCount",
              Math.floor(Math.random() * 10000 + 1)
            );
            const sales = getProductField(
              product,
              "sales",
              Math.floor(Math.random() * 100000 + 1)
            );
            const bestSeller = getProductField(product, "bestSeller", null);
            const starSeller = getProductField(
              product,
              "starSeller",
              Math.random() > 0.7
            );
            const rrp = getProductField(
              product,
              "rrp",
              (price * 1.15).toFixed(2)
            );
            return (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="block focus:outline-none"
              >
                <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col min-h-[340px] cursor-pointer">
                  {/* Add to Cart button top right */}
                  <button
                    className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-gray-100 z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(
                        addToCart({
                          productId: product.id,
                          quantity: 1,
                          selectedAttributes: {},
                          product,
                        })
                      );
                    }}
                  >
                    <CartIcon />
                  </button>
                  <div className="w-full flex-1 flex items-center justify-center mb-4">
                    <img
                      src={product.gallery?.[0] || "/placeholder.svg"}
                      alt={product.name}
                      className="object-contain rounded-lg max-h-40 max-w-full bg-gray-50"
                      style={{ background: "#f7f7f7" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg text-gray-900">
                      {offerPrice}€
                    </span>
                    <span className="text-xs text-gray-500">
                      {sales > 1000
                        ? `${Math.round(sales / 100) / 10}K+ sold`
                        : `${sales} sold`}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                    RRP {rrp}€
                  </div>
                  {bestSeller && (
                    <div className="text-xs text-green-600 font-semibold mb-1 truncate">
                      {bestSeller}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-base text-gray-700 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(rating)
                            ? "text-black fill-black"
                            : i < rating
                            ? "text-black fill-black opacity-50"
                            : "text-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm font-normal">
                      {ratingCount.toLocaleString()}
                    </span>
                  </div>
                  {starSeller && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-700 text-white rounded text-xs font-medium w-fit mb-1 mt-1">
                      <svg
                        className="h-4 w-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      Star seller
                    </span>
                  )}
                  <h3 className="font-medium text-base text-gray-900 mb-1 text-left w-full truncate mt-2">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;
