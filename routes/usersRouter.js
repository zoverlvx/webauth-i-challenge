const router = require("express").Router();
const Users = require("./model")("users");
const restricted = require("./auth/restrictedMiddleware");
const handleRes = require("./tools/handleRes");

router.get("/", restricted, async (req, res) => {
    try {
        const users = await Users.find();
        await handleRes(res, 200, users)
    } catch (error) {
        handleRes(res, 500, error)    
    }
});

module.exports = router;
