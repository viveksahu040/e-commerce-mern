import express from "express"
import { addToCart , getCartProduct , removeAllFromCart , updateQuantity } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express();

router.post("/",protectRoute,addToCart);
router.get("/",protectRoute,getCartProduct);
router.delete("/",protectRoute,removeAllFromCart);
router.put("/:id",protectRoute,updateQuantity);

export default router;
