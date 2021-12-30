const express = require('express')
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');

router.put("/updateUser", async (req,res)=>{
    const uid = req.body.username;
    const name = req.body.name;
    const age = req.body.age;

    const update = await userModel.findOneAndUpdate(
        { username: uid },
        { name: name , age: age },
        {new: true}
    );

    return res.json({data: update});
});
module.exports = router;