// Adding express js
const express = require("express")
const app = express()
// Adding dotenv
require("dotenv").config()
// Browser Support Code
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// Login url
const login = require("./routes/log/login")
app.use("/login",login)

// Signup url
const signup = require("./routes/sign/signup")
app.use("/signup",signup)

// User url
const user = require("./routes/users/user")
app.use("/user",user)

// Home page url
app.get("/",(req,res)=>{
    res.send("You are on HOME PAGE")
})

// This routing for unknown urls
app.get("*",(req,res)=>{
    res.status(404).send("Sorry page not found")
})


app.listen(process.env.PORT,()=>{
    console.log("Server Connected")
})