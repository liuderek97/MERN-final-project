const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    googleID:  String,
    email:     String,
    firstName: String,
    lastName:  String
});

mongoose.model("users", UserSchema);
