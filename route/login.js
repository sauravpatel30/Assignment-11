const express = require('express')
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');

router.post("/loginUser",async(req,res)=>{
    const list = await userModel.find({username: req.body.UserName, password: req.body.Password});
    return res.json({data: list});
})

module.exports = router;