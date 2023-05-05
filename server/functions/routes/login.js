const express = require("express");
const router = express.Router();


router.post("/",(req,res)=>{
    const {userName,password} =req.body
    // console.log(req.body)
    if(userName !== "admin" || password !== "12345"){
       return res.status(401).send({message:"wrong password"})
    }
    res.status(200).send({name:"Charles Monroe"});
})



module.exports= router;