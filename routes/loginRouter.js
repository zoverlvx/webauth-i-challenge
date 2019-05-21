const router = require("express").Router();
const Users = require("./model")("users");
const handleRes = require("./tools/handleRes");

router.post("/", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = Users.findBy({username});
        if (
            user && bcrypt.compareSync(
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
            !user || !bcrypt.compareSync(
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
