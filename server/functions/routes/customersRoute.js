const express = require("express");
const router = express.Router();

// data
const {dummyData} = require("../data")

router.get("/",(req,res)=>{
    // const {userName,password} =req.body
    console.log(req.body)
    res.send(dummyData);
})

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id,"the id")
    const found = dummyData.find((customer)=>customer.customerId === id)

    if(!found){
        return res.status(404).send({message:"User does not exist"})
    }

    
    res.send(found);
})


module.exports= router;