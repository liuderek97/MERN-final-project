const isLoggedIn = (req, res, next) =>
{
    if (req.isAuthenticated()) return next();
    res.status(401).send("No user logged in.")
}

const isGuest = (req, res, next) =>
{
    if (!req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = { isLoggedIn, isGuest };
