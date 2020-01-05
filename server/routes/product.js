const express  = require('express');
const router = express.Router();
const ProductController = require("../controllers/product");

router.get('/products/id/:id', ProductController.getProductById);
router.get('/products/code/:code', ProductController.getProductByCode);

router.get('/products', ProductController.getAllProducts);


module.exports = router;