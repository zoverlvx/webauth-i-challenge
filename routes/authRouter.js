const router = require("express").Router();
const Users = require("./model")("users");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await Users.findBy({username});
        if (
            username && bcrypt.compareSync(
                password, 
                user.password
            )
        ) {
            req.session.user = user;
            res.status(200).json({success: true});
        }
        if (
            !username || !bcrypt.compareSync(
                    password,
                    user.password    
            )
        ) {
            res.status(401).json({message: "Invalid Credentials"})
        }
    } catch (error) {
        res.status(500).json({error});
    }
});

router.post("/registration", async (req, res) => {
    let user = req.body;
    
    // generate a hash from the user's password
    const hash = bcrypt.hashSync(user.password, 10);

    // overwrite the user.password with our hash
    user.password = hash;
    try {
        const saved = await Users.add(user);
        if (saved) {
            res.status(200).json({success: true});
        }
    } catch (error) {
        res.status(500).json({error});
    }
    
});

router.get("/logout", async (req, res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(err) {
                res.send("There was an error logging out.")
            }
            if (!err) {
                res.send("You have been logged out")
            }
        })
    }
    if(!req.session) {
        console.log("There was no session")
        res.end();
    }
});

module.exports = router;
