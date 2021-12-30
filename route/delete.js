const express = require('express')
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');

router.delete("/deluser/:id",async(req,res)=>{
    console.log(req.params.id);
    await userModel.findOneAndDelete({username: req.params.id});
    const list = await userModel.find();
    return res.json({data: list});
})

module.exports = router;