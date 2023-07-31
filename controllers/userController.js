 const { response } = require('express')
const mongoose=require('mongoose')
 const USER=require('../models/userModel.js').users


const loginPage=((req,res)=>{
 res.render('login.hbs')
})
const showSignup=((req,res)=>{
 res.render('signup.hbs')
})

const doSignup=(req,res)=>{
    console.log(req.body);
 USER({ 
    Name:req.body.Name,
    Email:req.body.Email,
    Password:req.body.Password,
    
 }).save().then((res)=>{
 res.json({signup:true})
 })
.catch(()=>{
     res.json({signup:false})
})
}

const doLogin=(req,res)=>{
   console.log(res.body,"*******");
USER.find({email:req.body.email,password:req.body.password}).then((response)=>{
   if(response.length > 0){
      res.json({login:true})
   }else{
      res.json({login:false})
   }
})
}

module.exports={doSignup,loginPage,showSignup,doLogin}