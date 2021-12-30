const express = require('express')
const router = express.Router();
router.use(express.json());
const userModel = require('../models/user');

router.post("/regisUser", async(req, res) => {
    console.log(req.body);
    userModel.create(req.body);
    return res.json({ data: "registered successfully" });
  });

module.exports = router;