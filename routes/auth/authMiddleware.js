const Users = require("../model")("users");
const bcrypt = require("bcryptjs");
const handleRes = require("../tools/handleRes");

module.exports = async function(req, res, next) {
    try {
        const {username, password} = req.headers;
        console.log("Here is req.headers", req.headers);
        if (username && password) {
            const user = await Users.findBy({username});
            if (
                users && bcrypt.compareSync(
                    password,
                    user.password    
                )
            ) {
                next();
            }
            if (
                !users || !bcrypt.compareSync(
                    password,
                    user.password    
                )
            ) {
                await handleRes(
                    res,
                    401,
                    {success: false, message: "Invalid Credentials"}
                )
            }
        }
    } catch (error) {
        handleRes(res, 500, error);
    }
}
