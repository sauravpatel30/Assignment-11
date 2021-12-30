const express = require('express')
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');

router.post("/listUser",async(req,res)=>{
    const list = await userModel.find();
    return res.json({data: list});
})

module.exports = router;