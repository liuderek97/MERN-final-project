const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    code: {
        type: Number,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    name_th: {
        type: String
    },
    price: {
        type: Number
    },
    takeaway: {
        type: Boolean,
        default: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "categories"
    }
});

mongoose.model("products", MenuSchema);
