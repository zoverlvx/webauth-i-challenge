module.exports = {
    name: process.env.SESSION_NAME, // defaults to sid, but we should change this as that clues in on our stack
    secret: process.env.SESSION_SECRET,
    // used to encrypt/decrypt the cookie (use .env file here)
    cookie: {
        maxAge: 1000 * 60 * 60, // (this is for 1 hour) how long the session is valid for in millisecs
        secure: true // used for https only communications, should be true in production, true in dev because of c9 environment
    },
    httpOnly: true, // cannot access the cookie from JS using document.cookie
    resave: false, // keep it false to avoid recreating sessions that have not changed
    saveUninitialized: false, // GDPR Laws against setting cookies automatically
}
