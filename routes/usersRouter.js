const router = require("express").Router();
const Users = require("./model")("users");
const restricted = require("./auth/authMiddleware");
const handleRes = require("./tools/handleRes");

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        console.log("users in users route: ", users)
        await handleRes(res, 200, users)
    } catch (error) {
        handleRes(res, 500, error)    
    }
});

module.exports = router;
