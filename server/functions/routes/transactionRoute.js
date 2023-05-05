const express = require("express");
const router = express.Router();

// data
const {transactionsData} = require("../data")

router.get("/",(req,res)=>{
    // const {userName,password} =req.body
    console.log(req.body)
    res.send(transactionsData);
})



module.exports= router;