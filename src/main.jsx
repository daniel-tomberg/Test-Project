import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { products } from "./helpers/products";

// Provide products as a prop to App (or use context if needed)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App products={products} />
    </Provider>
  </StrictMode>
);
