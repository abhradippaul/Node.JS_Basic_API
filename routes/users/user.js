const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("You are on USER PAGE")
})

module.exports = router;