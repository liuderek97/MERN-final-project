const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleID:  String,
    email:     String,
    firstName: String,
    lastName:  String,
    admin: {
        type: Boolean,
        default: false
    }
});

mongoose.model("users", UserSchema);
