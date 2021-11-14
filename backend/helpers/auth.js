const cookieCache = new Map();

exports.checkAuth = (req, res, next) => {
    // List of routes not to check for cookies on
    const nonAuthRoutes = [
        '/',
        "/api/auth/setcookie",
    ]

    const incomingCookie = req.cookies['X-Auth'];

    // If we have cookie stored let them through
    if (nonAuthRoutes.includes(req.path) || cookieCache.get(incomingCookie)) {
        next();
    }
    else {
        res.redirect('/');
    }
}

exports.cookieCache = cookieCache;