const handleRes = require("../tools/handleRes");

module.exports = function(req, res, next) {
    if(req.session && req.session.user) {
        next();
    }
    if(!req.session || !req.session.user) {
        handleRes(
            res, 
            401,
            {success: false, message: "Invalid credentials"}
        );
    }
}
