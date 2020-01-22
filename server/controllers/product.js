const mongoose = require('mongoose');
const Product = mongoose.model('products');

const getAllProducts = async (req, res) => 
{
    await Product.find().populate('category')
        .then(data =>
        {
            console.log(data)
            res.json({ data })
        })
        .catch(err => res.status(500).send(err));
}

const getProductById = async (req, res) =>
{
    let { id } = req.params;
    await Product.findById(id).populate('category')
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));    
}


const getProductByCode = async (req, res) =>
{
    let { code } = req.params;
    await Product.find({ code }).populate('category')
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

const createProduct = (req, res) => 
{
    let product = new Product(req.body);

    product.save()
        .then(() => res.status(200).json({ "success": true, "message": "product added successfully" }))
        .catch((err) =>
        {
            console.log(err)
            res.status(400).json({ "success": false, "message": "product not added" })
        })
}

const updateProduct = async (req, res) => 
{
    let { id } = req.params;
    let { name_en, name_th, code, description, price, category, takeaway } = req.body;
    await Product.findOneAndUpdate({_id: id }, { $set: { name_en, name_th, code, description, price, category, takeaway } }, { new: true })
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err))
}

const deleteProduct = async (req, res) =>
{
    let { id } = req.params;
    await Product.findOneAndRemove({_id: id }, { new: false })
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err))
}

module.exports = { 
    getAllProducts, 
    getProductById, 
    getProductByCode, 
    createProduct, 
    updateProduct,
    deleteProduct
};
