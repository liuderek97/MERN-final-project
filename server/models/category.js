const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    required:true
});

mongoose.model("categories", CategorySchema);
