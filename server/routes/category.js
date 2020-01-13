const express  = require('express');
const router = express.Router();
const CategoryController = require("../controllers/category");

router.get('/all', CategoryController.getAllCategories);
router.post('/', CategoryController.createCategory);

router.get('/id/:id', CategoryController.getCategoryById);
router.patch('/id/:id', CategoryController.updateCategory);
router.delete('/id/:id', CategoryController.deleteCategory);

module.exports = router;