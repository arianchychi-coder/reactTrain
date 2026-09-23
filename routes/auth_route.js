const express = require("express")
const authOrizationToken = require("../middelware/auth_middelware")
const router = express.Router()
router.get("/",authOrizationToken,(req,res)=>{
    res.json({message:"Token find"})
})
module.exports = router