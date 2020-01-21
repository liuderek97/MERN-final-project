const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String
});

mongoose.model("categories", CategorySchema);
