import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayouy";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App({ products }) {
  // Wrapper components to inject products prop
  const HomePageWithProducts = (props) => (
    <HomePage {...props} products={products} />
  );
  const CategoryPageWithProducts = (props) => (
    <CategoryPage {...props} products={products} />
  );
  const ProductDetailsPageWithProducts = (props) => (
    <ProductDetailsPage {...props} products={products} />
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/all" replace />} />
        <Route path="/all" element={<HomePageWithProducts />} />
        <Route path="/:categoryId" element={<CategoryPageWithProducts />} />
        <Route
          path="/products/:productId"
          element={<ProductDetailsPageWithProducts />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
