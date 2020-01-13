const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const keys = require('./keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = function(passport)
{
    passport.use(new LocalStrategy(
        function (username, password, done) 
        {
            User.findOne({ username }, function (err, user) 
            {
                if (err) return done(err);
                if (!user) return done(null, false);
                if (!user.verifyPassword(password)) return done(null, false);
                return done(null, user);
            });
        }
    ));

    // passport.use(
    //     new GoogleStrategy({
    //         clientID: keys.googleAuth.clientID,
    //         clientSecret: keys.googleAuth.clientSecret,
    //         callbackURL: keys.googleAuth.callbackURL,
    //         proxy: true
    //     }, (access, refresh, profile, done) =>
    //     {        
    //         User.findOne({
    //             googleID: profile.id
    //         })
    //         .then(user =>
    //         {
    //             if (user)
    //             {
    //                 done(null, user);
    //             } else
    //             {
    //                 const newUser = {
    //                     googleID: profile.id,
    //                     firstName: profile.name.givenName,
    //                     lastName: profile.name.familyName,
    //                     email: profile.emails[0].value
    //                 };

    //                 new User(newUser)
    //                 .save()
    //                 .then(user => done(null, user));
    //             }
    //         });
    //     })
    // );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => User.findById(id).then(user =>
    {
        done(null, user)
    }));
};
