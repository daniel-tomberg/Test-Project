import express from "express";
import { products } from "../../../src/helpers/products.js";

const router = express.Router();

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
