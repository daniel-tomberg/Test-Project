import express from "express";
import productsRouter from "./api/products/route.js";

const app = express();

app.use("/api/products", productsRouter);

// Serve static files if needed (for production)
// app.use(express.static('dist'));

const PORT = process.env.PORT || 3099;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// UncaughtException Error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  process.exit(1);
});

// connectDatabase();

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
});
