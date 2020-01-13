const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./server/config/keys');

require('./server/models/user');
require('./server/models/product');
require('./server/models/category');

mongoose.Promise = global.Promise;
mongoose.connect( keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDb connection'))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false
    })
);

require('./server/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => { res.locals.user = req.user || null; next(); });

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') 
{
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('/*', (req, res) =>
    {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use('/auth', require('./server/routes/auth') );
app.use('/menu', require('./server/routes/product') );

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`started server on port ${port}`));