const router = require("express").Router();
const Users = require("./model")("users");
const handleRes = require("./tools/handleRes");

router.get("/", async (req, res) => {
    try {
        const users = await Users.find();
        handleRes(res, 200, users)

    } catch (error) {
        handleRes(res, 500, error)    
    }
});

module.exports = router;
