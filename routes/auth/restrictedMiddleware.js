module.exports = function(req, res, next) {
    if(req.session && req.session.user) {
        next();
    }
    if(!req.session || !req.session.user) {
        res.status(401).json({success: false, message: "Invalid credentials"});
    }
}
