import { useParams } from "react-router-dom";
import { useState } from "react";
import parse from "html-react-parser";
import ProductAttributes from "../../../components/ProductAttributes";
import ImageCarousel from "../../../components/ImageCarousel";
import { addToCart, openCart } from "/src/store/cartSlice";
import { useDispatch } from "react-redux";
import Spinner from "/src/components/Spinner";

const ProductDetailsPage = ({ products }) => {
  const { productId } = useParams();
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const dispatch = useDispatch();

  if (!products) return <Spinner loading={true} />;
  const product = products.find((p) => String(p.id) === String(productId));
  if (!product) return <p>Product not found.</p>;

  const allAttributesSelected = product?.attributes?.length
    ? product.attributes.every((attr) => selectedAttributes[attr.name])
    : false;

  return (
    <section>
      <div className="container">
        <section className="py-10">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              <div
                className="w-full md:w-[60%] flex flex-col md:flex-row justify-between gap-5"
                data-testid="product-gallery"
              >
                {/* image carousel  */}
                <ImageCarousel gallery={product.gallery} />
              </div>
              <div className="w-full md:w-[40%]">
                {/* name  */}
                <h1 className="text-4xl font-raleway font-semibold mb-5">
                  {product.name}
                </h1>
                {/* attributes  */}
                <ProductAttributes
                  attributes={product.attributes}
                  onChange={setSelectedAttributes}
                />
                {/* price  */}
                <div>
                  <h3 className="text-xl font-roboto font-semibold">Price:</h3>
                  <p className="font-raleway text-2xl font-bold mb-5">
                    {product.prices[0].currency.symbol +
                      product.prices[0].amount}
                  </p>
                </div>
                {/* add to cart btn  */}
                {product.inStock && (
                  <button
                    disabled={
                      product.attributes.length > 0 && !allAttributesSelected
                    }
                    className={`px-6 py-3 rounded w-full uppercase ${
                      product.attributes.length > 0 && !allAttributesSelected
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-[#6ed388] cursor-pointer"
                    }`}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          productId: product.id,
                          selectedAttributes,
                          quantity: 1,
                          product: product,
                        })
                      );
                      dispatch(openCart());
                    }}
                    data-testid="add-to-cart"
                  >
                    Add to Cart
                  </button>
                )}
                {/* description  */}
                <div
                  className="font-roboto my-5"
                  data-testid="product-description"
                >
                  {product.description ? parse(product.description) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
