import express from "express";
import { getAllproducts, getFeaturedProducts, createProducts, deleteProducts , getRecommendedProducts  , getProductsbyCategory , toggleFeaturedProductts} from "../controllers/product.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllproducts);
router.get("/featured", getFeaturedProducts)
router.get("/category/:category" , getProductsbyCategory)
router.get("/recommendations" , getRecommendedProducts)
router.post("/", protectRoute, adminRoute, createProducts);
router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProductts);
router.delete("/:id", protectRoute, adminRoute, deleteProducts);

export default router