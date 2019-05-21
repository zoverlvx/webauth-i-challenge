const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("./model")("users");
const handleRes = require("./tools/handleRes");

router.post("/", async (req, res) => {
    let user = req.body;
    
    // generate a hash from the user's password
    const hash = bcrypt.hashSync(user.password, 10);

    // overwrite the user.password with our hash
    user.password = hash;
    try {
        const saved = await Users.add(user);
        if (saved) {
            console.log("Here is the status code", res.statusCode)
            handleRes(res, 200, {success: true})
        }
    } catch (error) {
        console.log("Here is the status code in catch: ", res.statusCode)
        handleRes(res, 500, error)
    }
    
});

module.exports = router;
