const express  = require('express');
const router = express.Router();
const ProductController = require("../controllers/product");

router.get('/products/id/:id',     ProductController.getProductById);
router.get('/products/code/:code', ProductController.getProductByCode);
router.post('/products',           ProductController.createProduct);
router.patch('/products/id/:id',   ProductController.updateProduct);
router.delete('/products/id/:id',  ProductController.deleteProduct);

router.get('/products', ProductController.getAllProducts);

module.exports = router;
