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


module.exports = { getAllProducts, getProductById, getProductByCode };