const express=require('express');
const app=express();
const router=express.Router();

router.post('/register',async(req,res)=>{
    console.log('Inside backend register part');
    const message="sending from bacend";
    res.json({message})
})

module.exports=router
