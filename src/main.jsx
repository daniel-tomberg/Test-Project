import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// Hardcoded product data (from backend response)
const products = [
  {
    id: "1",
    name: "Nike Air Huarache Le",
    inStock: true,
    gallery: [
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087",
      "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087",
    ],
    prices: [{ amount: 144.69, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Size",
        values: [
          {
            label: "40",
            rendered: "<span style='padding-inline: 8px'>40</span>",
          },
          {
            label: "41",
            rendered: "<span style='padding-inline: 8px'>41</span>",
          },
          {
            label: "42",
            rendered: "<span style='padding-inline: 8px'>42</span>",
          },
          {
            label: "43",
            rendered: "<span style='padding-inline: 8px'>43</span>",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Jacket",
    inStock: true,
    gallery: [
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg",
      "https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png",
      "https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png",
    ],
    prices: [{ amount: 518.47, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Size",
        values: [
          {
            label: "Small",
            rendered: "<span style='padding-inline: 8px'>S</span>",
          },
          {
            label: "Medium",
            rendered: "<span style='padding-inline: 8px'>M</span>",
          },
          {
            label: "Large",
            rendered: "<span style='padding-inline: 8px'>L</span>",
          },
          {
            label: "Extra Large",
            rendered: "<span style='padding-inline: 8px'>XL</span>",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "PlayStation 5",
    inStock: true,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51iPoFwQT3L._SL1230_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61qbqFcvoNL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51HCjA3rqYL._SL1230_.jpg",
    ],
    prices: [{ amount: 844.02, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Green",
            rendered:
              "<span style='background-color: #44FF03; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Cyan",
            rendered:
              "<span style='background-color: #03FFF7; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Blue",
            rendered:
              "<span style='background-color: #030BFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White",
            rendered:
              "<span style='background-color: #FFFFFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
      {
        name: "Capacity",
        values: [
          {
            label: "512G",
            rendered: "<span style='padding-inline: 8px'>512G</span>",
          },
          {
            label: "1T",
            rendered: "<span style='padding-inline: 8px'>1T</span>",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Xbox Series S 512GB",
    inStock: false,
    gallery: [
      "https://images-na.ssl-images-amazon.com/images/I/71vPCX0bS-L._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71q7JTbRTpL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71iQ4HGHtsL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61IYrCrBzxL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61RnXmpAmIL._SL1500_.jpg",
    ],
    prices: [{ amount: 333.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Green",
            rendered:
              "<span style='background-color: #44FF03; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Cyan",
            rendered:
              "<span style='background-color: #03FFF7; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Blue",
            rendered:
              "<span style='background-color: #030BFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White",
            rendered:
              "<span style='background-color: #FFFFFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
      {
        name: "Capacity",
        values: [
          {
            label: "512G",
            rendered: "<span style='padding-inline: 8px'>512G</span>",
          },
          {
            label: "1T",
            rendered: "<span style='padding-inline: 8px'>1T</span>",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "iMac 2021",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1617492405000",
    ],
    prices: [{ amount: 1688.03, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Capacity",
        values: [
          {
            label: "256GB",
            rendered: "<span style='padding-inline: 8px'>256GB</span>",
          },
          {
            label: "512GB",
            rendered: "<span style='padding-inline: 8px'>512GB</span>",
          },
        ],
      },
      {
        name: "With USB 3 ports",
        values: [
          {
            label: "Yes",
            rendered: "<span style='padding-inline: 8px'>Yes</span>",
          },
          {
            label: "No",
            rendered: "<span style='padding-inline: 8px'>No</span>",
          },
        ],
      },
      {
        name: "Touch ID in keyboard",
        values: [
          {
            label: "Yes",
            rendered: "<span style='padding-inline: 8px'>Yes</span>",
          },
          {
            label: "No",
            rendered: "<span style='padding-inline: 8px'>No</span>",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "iPhone 12 Pro",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000",
    ],
    prices: [{ amount: 1000.76, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Capacity",
        values: [
          {
            label: "512G",
            rendered: "<span style='padding-inline: 8px'>512G</span>",
          },
          {
            label: "1T",
            rendered: "<span style='padding-inline: 8px'>1T</span>",
          },
        ],
      },
      {
        name: "Color",
        values: [
          {
            label: "Green",
            rendered:
              "<span style='background-color: #44FF03; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Cyan",
            rendered:
              "<span style='background-color: #03FFF7; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Blue",
            rendered:
              "<span style='background-color: #030BFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White",
            rendered:
              "<span style='background-color: #FFFFFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "AirPods Pro",
    inStock: false,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    ],
    prices: [{ amount: 300.23, currency: { symbol: "$" } }],
    attributes: [],
  },
  {
    id: "8",
    name: "AirTag",
    inStock: true,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ],
    prices: [{ amount: 120.57, currency: { symbol: "$" } }],
    attributes: [],
  },
];

// Provide products as a prop to App (or use context if needed)
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App products={products} />
    </Provider>
  </StrictMode>
);
