const router = require("express").Router();
const Users = require("./model")("users");
const restricted = require("./auth/restrictedMiddleware");

router.get("/", restricted, async (req, res) => {
    try {
        const users = await Users.find();
        await res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = router;
