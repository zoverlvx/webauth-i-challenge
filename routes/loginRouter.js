const router = require("express").Router();
const Users = require("./model")("users");
const bcrypt = require("bcryptjs");
const handleRes = require("./tools/handleRes");

router.post("/", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await Users.findBy({username});
        if (
            username && bcrypt.compareSync(
                password, 
                user.password
            )
        ) {
                handleRes(
                    res, 
                    200, 
                    {success: true}
                );
        }
        if (
            !username || !bcrypt.compareSync(
                    password,
                    user.password    
            )
        ) {
                handleRes(
                    res, 
                    401, 
                    {message: "Invalid Credentials"}
                );
        }
    } catch (error) {
        handleRes(res, 500, error);
    }
});

module.exports = router;
