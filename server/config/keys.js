if (process.env.NODE_ENV === 'production') 
{
    module.exports = {
        mongoURI: 'mongodb+srv://aidan:derek@saran-thai-lv7zl.mongodb.net/saran-thai?retryWrites=true&w=majority'
    }
} else 
{
    module.exports = require('./keys_dev');
}
