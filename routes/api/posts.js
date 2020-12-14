const express = require("express");
const router = express.Router();

//route    get api/post
//test     test route
////access public
router.get("/",(req,res)=>res.send("POST route"));

module.exports = router;