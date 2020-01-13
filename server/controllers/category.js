const mongoose = require('mongoose');
const Category = mongoose.model('categories');

const getAllCategories = async (req, res) => 
{
    await Category.find()
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

const getCategoryById = async (req, res) =>
{
    let { id } = req.params;
    await Category.findById(id)
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

const createCategory = async (req, res) => 
{
    let { name } = req.body;
    new Category({ name })
        .save()
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

const updateCategory = async (req, res) => 
{
    let { id } = req.params;
    let { name } = req.body;
    await Category.findOneAndUpdate({ _id: id }, { $set: { name } }, { new: true })
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

const deleteCategory = async (req, res) => 
{
    let { id } = req.params;
    await Category.findOneAndRemove({ _id: id }, { new: false })
        .then(data => res.json({ data }))
        .catch(err => res.status(500).send(err));
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};