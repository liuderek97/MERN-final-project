if (process.env.NODE_ENV === 'production') 
{
    module.exports = {
        mongoURI: 'mongodb://localhost/saran-thai',
        googleAuth: {
            clientID: '1234',
            clientSecret: '1234',
            callbackURL: 'http://localhost/'
        }
    }
} else 
{
    module.exports = require('./keys_dev');
}
