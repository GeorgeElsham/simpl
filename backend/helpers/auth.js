const cookieCache = new Map();

exports.checkAuth = (req, res, next) => {
    // List of routes not to check for cookies on
    const nonAuthRoutes = [
        '/',
        "/api/auth/sign-in",
        "/api/auth/sign-up"
    ]

    const incomingCookie = req.cookies['X-Auth-Simpl'];

    const storedCookie = cookieCache.get(incomingCookie)

    // If we have cookie stored let them through
    if ((nonAuthRoutes.includes(req.path) || storedCookie) && storedCookie > Date.now()) {
        next();
    }
    else {
        res.redirect('/');
    }
}

exports.cookieCache = cookieCache;