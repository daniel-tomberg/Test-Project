// Hardcoded product data (from backend response)
export const products = [
  {
    id: "1",
    name: "Nike Air Huarache Le",
    inStock: true,
    category: "Clothes",
    brand: "Nike",
    rating: 4.5,
    sales: 3200,
    rrp: 159.99,
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
    category: "Clothes",
    brand: "H&M",
    rating: 4.2,
    sales: 2100,
    rrp: 599.99,
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
    category: "Games",
    brand: "Sony",
    rating: 4.9,
    sales: 12000,
    rrp: 899.99,
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
    category: "Games",
    brand: "Xbox",
    rating: 4.7,
    sales: 9500,
    rrp: 399.99,
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
    category: "Computer",
    brand: "Apple",
    rating: 4.8,
    sales: 1800,
    rrp: 1799.99,
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
    category: "Accessories",
    brand: "Apple",
    rating: 4.6,
    sales: 8000,
    rrp: 1099.99,
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
    category: "Headphones",
    brand: "Apple",
    rating: 4.4,
    sales: 6700,
    rrp: 329.99,
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
    category: "Accessories",
    brand: "Apple",
    rating: 4.1,
    sales: 2100,
    rrp: 139.99,
    gallery: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104?wid=445&hei=370&fmt=jpeg&qlt=95&.v=1617761672000",
    ],
    prices: [{ amount: 120.57, currency: { symbol: "$" } }],
    attributes: [],
  },
  {
    id: "9",
    name: "Samsung Galaxy S24 Ultra",
    inStock: true,
    category: "Accessories",
    brand: "Apple",
    rating: 4.7,
    sales: 4300,
    rrp: 1299.99,
    gallery: [
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/lifestyle/-1200w5/gsmarena_005.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/lifestyle/-1200w5/gsmarena_005.jpg",
      "https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/lifestyle/-1200w5/gsmarena_005.jpg",
    ],
    prices: [{ amount: 1199.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Storage",
        values: [
          {
            label: "256GB",
            rendered: "<span style='padding-inline: 8px'>256GB</span>",
          },
          {
            label: "512GB",
            rendered: "<span style='padding-inline: 8px'>512GB</span>",
          },
          {
            label: "1TB",
            rendered: "<span style='padding-inline: 8px'>1TB</span>",
          },
        ],
      },
      {
        name: "Color",
        values: [
          {
            label: "Titanium Black",
            rendered:
              "<span style='background-color: #222222; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Titanium Violet",
            rendered:
              "<span style='background-color: #A29BFE; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Titanium Yellow",
            rendered:
              "<span style='background-color: #FFF700; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Apple Watch Series 9",
    inStock: true,
    category: "Watches",
    brand: "Apple",
    rating: 4.5,
    sales: 3900,
    rrp: 449.99,
    gallery: [
      "https://onoff.ee/2779127-superlarge_default_2x/apple-watch-series-10-gps-42mm-jet-black-aluminium-case-with-black-sport-band-ml.jpg",
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-se-202503_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=dFQyNjEycitpbFBFNXA5RHpaQjc1cVRyZ0UrV1ZsQitKV21BVTBvVWtybWZaQno4VzdyOTRhQU93VEhhWjgvSHg4ZHpEbm5XWGdaM3BiNVRDaG55UkRKaXNRYkp0R0JVZXlFYjZYN3NSZ3NVRk5BYjU4dkMrYjBKSjFqVXFOVGg",
    ],
    prices: [{ amount: 399.0, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Case Size",
        values: [
          {
            label: "41mm",
            rendered: "<span style='padding-inline: 8px'>41mm</span>",
          },
          {
            label: "45mm",
            rendered: "<span style='padding-inline: 8px'>45mm</span>",
          },
        ],
      },
      {
        name: "Color",
        values: [
          {
            label: "Silver",
            rendered:
              "<span style='background-color: #C0C0C0; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Pink",
            rendered:
              "<span style='background-color: #FFD1DC; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Sony WH-1000XM5 Headphones",
    inStock: true,
    category: "Headphones",
    brand: "Sony",
    rating: 4.8,
    sales: 5200,
    rrp: 399.99,
    gallery: [
      "https://www.sony.ee/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      "https://www.sony.ee/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    ],
    prices: [{ amount: 349.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Silver",
            rendered:
              "<span style='background-color: #C0C0C0; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Nintendo Switch OLED",
    inStock: false,
    category: "Games",
    brand: "Nintendo",
    rating: 4.9,
    sales: 11000,
    rrp: 399.99,
    gallery: [
      "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vN1p8hQXL._AC_SL1500_.jpg",
    ],
    prices: [{ amount: 349.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "White",
            rendered:
              "<span style='background-color: #FFFFFF; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Neon Red/Blue",
            rendered:
              "<span style='background-color: #FF073A; width: 48%; height: 100%;display: inline-block'></span><span style='background-color: #0095FF; width: 48%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "13",
    name: "GoPro HERO12 Black",
    inStock: true,
    category: "Accessories",
    brand: "Sony",
    rating: 4.6,
    sales: 1500,
    rrp: 429.99,
    gallery: [
      "https://www.surfikaubamaja.ee/wp-content/uploads/EW1De9jx-600x600.png",
      "https://www.surfikaubamaja.ee/wp-content/uploads/EW1De9jx-600x600.png",
    ],
    prices: [{ amount: 399.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Bundle",
        values: [
          {
            label: "Standard",
            rendered: "<span style='padding-inline: 8px'>Standard</span>",
          },
          {
            label: "Creator Edition",
            rendered:
              "<span style='padding-inline: 8px'>Creator Edition</span>",
          },
        ],
      },
    ],
  },
  {
    id: "14",
    name: "Kindle Paperwhite (11th Gen)",
    inStock: true,
    category: "Accessories",
    brand: "Sony",
    rating: 4.3,
    sales: 1200,
    rrp: 159.99,
    gallery: [
      "https://capital.lv/media/catalog/product/cache/78b7d5e9d325dc0c77c021f203703bf1/7/5/7500c9e9-12bc-43f0-95a5-88fb8319d385.jpg",
      "https://capital.lv/media/catalog/product/cache/78b7d5e9d325dc0c77c021f203703bf1/7/5/7500c9e9-12bc-43f0-95a5-88fb8319d385.jpg",
    ],
    prices: [{ amount: 139.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Storage",
        values: [
          {
            label: "8GB",
            rendered: "<span style='padding-inline: 8px'>8GB</span>",
          },
          {
            label: "16GB",
            rendered: "<span style='padding-inline: 8px'>16GB</span>",
          },
        ],
      },
      {
        name: "Color",
        values: [
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "15",
    name: "Logitech MX Master 3S Mouse",
    inStock: true,
    category: "Computer",
    brand: "Sony",
    rating: 4.7,
    sales: 2100,
    rrp: 129.99,
    gallery: [
      "https://images.hind.ee/3129/58/logitech-mx-master-3s.jpg",
      "https://images.hind.ee/3129/58/logitech-mx-master-3s.jpg",
    ],
    prices: [{ amount: 99.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Graphite",
            rendered:
              "<span style='background-color: #434343; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "Pale Gray",
            rendered:
              "<span style='background-color: #D3D3D3; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "16",
    name: "Bose QuietComfort Ultra Earbuds",
    inStock: false,
    category: "Headphones",
    brand: "Sony",
    rating: 4.5,
    sales: 1800,
    rrp: 349.99,
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOdJ9kUBW6Utv7UMd6mqKoSkCR5Kdj3GVqA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOdJ9kUBW6Utv7UMd6mqKoSkCR5Kdj3GVqA&s",
    ],
    prices: [{ amount: 299.0, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White Smoke",
            rendered:
              "<span style='background-color: #F5F5F5; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "17",
    name: "ASUS ROG Zephyrus G14 (2024)",
    inStock: true,
    category: "Computer",
    brand: "Sony",
    rating: 4.8,
    sales: 900,
    rrp: 2099.99,
    gallery: [
      "https://static2.nordic.pictures/48128174-thickbox_default/laptop-asus-rog-zephyrus-g14-2024-14-32-gb-ram-1-tb-ssd-nvidia-geforce-rtx-4060-spanish-qwerty.jpg",
      "https://static2.nordic.pictures/48128174-thickbox_default/laptop-asus-rog-zephyrus-g14-2024-14-32-gb-ram-1-tb-ssd-nvidia-geforce-rtx-4060-spanish-qwerty.jpg",
    ],
    prices: [{ amount: 1899.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "RAM",
        values: [
          {
            label: "16GB",
            rendered: "<span style='padding-inline: 8px'>16GB</span>",
          },
          {
            label: "32GB",
            rendered: "<span style='padding-inline: 8px'>32GB</span>",
          },
        ],
      },
      {
        name: "Storage",
        values: [
          {
            label: "512GB SSD",
            rendered: "<span style='padding-inline: 8px'>512GB SSD</span>",
          },
          {
            label: "1TB SSD",
            rendered: "<span style='padding-inline: 8px'>1TB SSD</span>",
          },
        ],
      },
    ],
  },
  {
    id: "18",
    name: "Canon EOS R50 Mirrorless Camera",
    inStock: true,
    category: "Accessories",
    brand: "Sony",
    rating: 4.4,
    sales: 700,
    rrp: 799.99,
    gallery: [
      "https://static.bhphoto.com/images/images500x500/canon_eos_r50_mirrorless_camera_1675431097_1754937.jpg",
      "https://static.bhphoto.com/images/images500x500/canon_eos_r50_mirrorless_camera_1675431097_1754938.jpg",
    ],
    prices: [{ amount: 679.0, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White",
            rendered:
              "<span style='background-color: #fff; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
  {
    id: "19",
    name: 'Samsung 49" Odyssey OLED G9 Gaming Monitor',
    inStock: false,
    category: "Computer",
    brand: "Sony",
    rating: 4.7,
    sales: 600,
    rrp: 1999.99,
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvPeZvV5oUn3oBcCj_rz0tow6HgZnL51v1g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvPeZvV5oUn3oBcCj_rz0tow6HgZnL51v1g&s",
    ],
    prices: [{ amount: 1799.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Refresh Rate",
        values: [
          {
            label: "240Hz",
            rendered: "<span style='padding-inline: 8px'>240Hz</span>",
          },
        ],
      },
    ],
  },
  {
    id: "20",
    name: "Garmin Forerunner 965",
    inStock: true,
    category: "Watches",
    brand: "Sony",
    rating: 4.6,
    sales: 1100,
    rrp: 649.99,
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-V3c7au0GyS9HJXPJS3fUUhlZZ01Pkytgw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-V3c7au0GyS9HJXPJS3fUUhlZZ01Pkytgw&s",
    ],
    prices: [{ amount: 599.99, currency: { symbol: "$" } }],
    attributes: [
      {
        name: "Color",
        values: [
          {
            label: "Black",
            rendered:
              "<span style='background-color: #000; width: 100%; height: 100%;display: inline-block'></span>",
          },
          {
            label: "White",
            rendered:
              "<span style='background-color: #fff; width: 100%; height: 100%;display: inline-block'></span>",
          },
        ],
      },
    ],
  },
];
