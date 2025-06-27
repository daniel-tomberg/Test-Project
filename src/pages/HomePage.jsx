import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const HomePage = ({ products }) => {
  if (!products) return <Spinner loading={true} />;
  if (products.length === 0) return <p>No products found.</p>;
  return (
    <>
      <section className="py-10">
        <div className="container">
          <h1 className="text-4xl mb-5">ALL</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
