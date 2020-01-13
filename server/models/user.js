const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) 
{
    if (this.password) 
    {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
    };
    next();
});

mongoose.model("users", UserSchema);
