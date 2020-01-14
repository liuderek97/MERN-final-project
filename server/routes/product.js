const express  = require('express');
const router = express.Router();
const ProductController = require("../controllers/product");

router.get('/products/all',        ProductController.getAllProducts);
router.get('/products/code/:code', ProductController.getProductByCode);
router.post('/products',           ProductController.createProduct);
router.get('/products/id/:id',     ProductController.getProductById);
router.patch('/products/id/:id',   ProductController.updateProduct);
router.delete('/products/id/:id',  ProductController.deleteProduct);

module.exports = router;
