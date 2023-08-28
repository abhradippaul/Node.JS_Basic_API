const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("You are on LOGIN PAGE")
})

module.exports = router;