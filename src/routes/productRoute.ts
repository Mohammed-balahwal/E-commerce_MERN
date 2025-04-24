import express from 'express';
import { getAllProducts } from '../services/productService';

const router = express.Router();
router.get('/',async (req, res) => {
    const product = await getAllProducts();
    res.status(product.statusCode).send(product.data);
  
});
export default router;
// import express from 'express';