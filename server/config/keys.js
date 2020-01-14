if (process.env.NODE_ENV === 'production') 
{
    module.exports = {
        mongoURI: 'mongodb://localhost/saran-thai'
    }
} else 
{
    module.exports = require('./keys_dev');
}
