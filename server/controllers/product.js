const mongoose = require('mongoose');
const Product = mongoose.model('products');

const getAllProducts = async (req, res) => 
{
    await Product.find().populate('category')
        .then(data => res.json({ data }))
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
        .then(() => {
            res.status(200).send('product added successfully');
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
}

const updateProduct = async (req, res) => 
{
    let { id } = req.params;
    let { name_en } = req.body;
    await Product.findOneAndUpdate({_id: id }, { $set: { name_en } }, { new: true })
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
