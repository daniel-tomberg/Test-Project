import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const CATEGORIES = ["Clothes", "Watches", "Computer", "Games", "Headphones"];
const BRANDS = ["Nike", "Sony", "Apple", "H&M", "Nintendo", "Xbox"];
const RATINGS = [5, 4, 3, 2, 1];

function getProductField(product, field, fallback) {
  return product[field] !== undefined ? product[field] : fallback;
}

// Minimal Accordion implementation
function Accordion({ children, open, toggle }) {
  return children({ open, toggle });
}
function AccordionItem({ value, open, toggle, label, children }) {
  const isOpen = open.includes(value);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-3 font-semibold text-lg focus:outline-none"
        onClick={() => toggle(value)}
        type="button"
      >
        {label}
        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </span>
      </button>
      {isOpen && <div className="pb-4">{children}</div>}
      <hr className="my-2 border-gray-200" />
    </div>
  );
}

// Minimal Checkbox
function Checkbox({ id, checked, onChange }) {
  return (
    <span
      className="relative inline-block align-middle mr-2"
      style={{ verticalAlign: "middle" }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none h-6 w-6 border-2 border-black rounded-md focus:outline-none transition-all"
        style={{ verticalAlign: "middle" }}
      />
      {checked && (
        <svg
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="5 11 9 15 15 7" />
        </svg>
      )}
    </span>
  );
}

// Minimal Slider
function Slider({ min, max, step, value, onChange }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className="w-full accent-red-500 h-2 bg-gray-100 rounded-lg appearance-none"
      style={{ accentColor: "#ef4444" }}
    />
  );
}

const HomePage = ({ products }) => {
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    brands: [],
    ratings: [],
  });
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);
  const PRODUCTS_PER_PAGE = 6;
  const [accordionOpen, setAccordionOpen] = useState(["categories"]);
  const dispatch = useDispatch();

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const category = getProductField(product, "category", "Accessories");
    const brand = getProductField(product, "brand", "ComfyPets");
    const rating = getProductField(product, "rating", 4);
    const price = product.prices?.[0]?.amount || 0;
    // Category
    if (
      selectedFilters.categories.length > 0 &&
      !selectedFilters.categories.includes(category)
    )
      return false;
    // Brand
    if (
      selectedFilters.brands.length > 0 &&
      !selectedFilters.brands.includes(brand)
    )
      return false;
    // Rating
    if (
      selectedFilters.ratings.length > 0 &&
      !selectedFilters.ratings.some((r) => rating >= r && rating < r + 1)
    )
      return false;
    // Price
    if (price < priceRange[0] || price > priceRange[1]) return false;
    return true;
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.prices?.[0]?.amount || 0;
    const priceB = b.prices?.[0]?.amount || 0;
    if (sort === "price-low") return priceA - priceB;
    if (sort === "price-high") return priceB - priceA;
    return 0; // featured or default
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  // Filter toggles
  const toggleFilter = (type, value) => {
    setSelectedFilters((prev) => {
      const current = [...prev[type]];
      const index = current.indexOf(value);
      if (index === -1) {
        current.push(value);
      } else {
        current.splice(index, 1);
      }
      return { ...prev, [type]: current };
    });
  };
  const clearFilters = () => {
    setSelectedFilters({ categories: [], brands: [], ratings: [] });
    setPriceRange([0, 2000]);
  };

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
  const XIcon = () => (
    <svg
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
  const ChevronLeft = () => (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
  const ChevronRight = () => (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
  const QuestionIcon = () => (
    <svg
      className="h-4 w-4 inline ml-1 text-gray-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );

  // FilterSidebar component
  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? "" : "sticky top-20"}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Filters</h3>
        {(selectedFilters.categories.length > 0 ||
          selectedFilters.brands.length > 0 ||
          selectedFilters.ratings.length > 0 ||
          priceRange[0] > 0 ||
          priceRange[1] < 2000) && (
          <button
            onClick={clearFilters}
            className="h-8 text-xs text-red-500 hover:text-red-700 font-semibold"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="space-y-4">
        <Accordion
          open={accordionOpen}
          toggle={(val) =>
            setAccordionOpen((prev) =>
              prev.includes(val)
                ? prev.filter((v) => v !== val)
                : [...prev, val]
            )
          }
        >
          {({ open, toggle }) => (
            <>
              <AccordionItem
                value="categories"
                open={open}
                toggle={toggle}
                label="Categories"
              >
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedFilters.categories.includes(category)}
                        onChange={() => toggleFilter("categories", category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="text-base font-normal cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem
                value="price"
                open={open}
                toggle={toggle}
                label="Price Range"
              >
                <div className="space-y-4 px-1">
                  <Slider
                    min={0}
                    max={2000}
                    step={10}
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([+e.target.value, priceRange[1]])
                    }
                  />
                  <Slider
                    min={0}
                    max={2000}
                    step={10}
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], +e.target.value])
                    }
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem
                value="brands"
                open={open}
                toggle={toggle}
                label="Brands"
              >
                <div className="space-y-2">
                  {BRANDS.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox
                        id={`brand-${brand}`}
                        checked={selectedFilters.brands.includes(brand)}
                        onChange={() => toggleFilter("brands", brand)}
                      />
                      <label
                        htmlFor={`brand-${brand}`}
                        className="text-base font-normal cursor-pointer"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionItem>
              <AccordionItem
                value="ratings"
                open={open}
                toggle={toggle}
                label="Ratings"
              >
                <div className="space-y-2">
                  {RATINGS.map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox
                        id={`rating-${rating}`}
                        checked={selectedFilters.ratings.includes(rating)}
                        onChange={() => toggleFilter("ratings", rating)}
                      />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="text-base font-normal cursor-pointer flex items-center"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="ml-1"></span>
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            </>
          )}
        </Accordion>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
        <div className="flex items-center text-sm text-gray-500">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>Shop</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <FilterSidebar />
        </div>
        {/* Product Grid and Controls */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {/* Active filters */}
              {selectedFilters.categories.map((category) => (
                <span
                  key={`cat-${category}`}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 rounded text-xs"
                >
                  {category}
                  <button onClick={() => toggleFilter("categories", category)}>
                    <XIcon />
                  </button>
                </span>
              ))}
              {selectedFilters.brands.map((brand) => (
                <span
                  key={`brand-${brand}`}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 rounded text-xs"
                >
                  {brand}
                  <button onClick={() => toggleFilter("brands", brand)}>
                    <XIcon />
                  </button>
                </span>
              ))}
              {(priceRange[0] > 0 || priceRange[1] < 2000) && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-200 rounded text-xs">
                  ${priceRange[0]} - ${priceRange[1]}
                  <button onClick={() => setPriceRange([0, 2000])}>
                    <XIcon />
                  </button>
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-500 hidden sm:inline">
                {filteredProducts.length} products
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters to find what you're looking for.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-primary text-white rounded"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
              {paginatedProducts.map((product) => {
                const price = product.prices?.[0]?.amount || 0;
                const offerPrice =
                  product.offerPrice || (price * 0.85).toFixed(2);
                const rating = getProductField(product, "rating", 4);
                const ratingCount = getProductField(product, "sales", 0);
                const sales = getProductField(product, "sales", 0);
                const bestSeller = getProductField(product, "bestSeller", null);
                const rrp = getProductField(product, "rrp", price);
                return (
                  <Link
                    to={`/products/${product.id}`}
                    key={product.id}
                    className="block focus:outline-none"
                  >
                    <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 flex flex-col min-h-[340px] cursor-pointer group">
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
                      <div className="w-full flex-1 flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={product.gallery?.[0] || "/placeholder.svg"}
                          alt={product.name}
                          className="object-contain rounded-lg max-h-40 max-w-full bg-gray-50 transition-transform duration-300 group-hover:scale-110"
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
                        RRP {rrp}€ <QuestionIcon />
                      </div>
                      {bestSeller && (
                        <div className="text-xs text-green-600 font-semibold mb-1 truncate">
                          {bestSeller}
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-base text-gray-700 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const full = i < Math.floor(rating);
                          const half = !full && i < rating;
                          return (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${
                                full
                                  ? "text-black fill-black"
                                  : half
                                  ? "text-black fill-black opacity-50"
                                  : "text-gray-300"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              {half && (
                                <rect
                                  x="12"
                                  y="2"
                                  width="12"
                                  height="19"
                                  fill="white"
                                  fillOpacity="0.5"
                                />
                              )}
                            </svg>
                          );
                        })}
                        <span className="ml-1 text-sm font-normal">
                          {ratingCount.toLocaleString()}
                        </span>
                      </div>

                      <h3 className="font-medium text-base text-gray-900 mb-1 text-left w-full truncate mt-2">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-12">
            <button
              className="border rounded p-2"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              <ChevronLeft />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`h-8 w-8 p-0 border rounded ${
                  page === i + 1 ? "bg-primary text-white" : ""
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="border rounded p-2"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
