const mongoose=require('mongoose')
 const USER=require('../models/userModel.js').users


const loginPage=((req,res)=>{
 res.render('user/login.hbs')
})
const showSignup=((req,res)=>{
 res.render('user/signup.hbs')
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
USER.find({Email:req.body.email,Password:req.body.password}).then((response)=>{
   console.log(response);
   if(response.length > 0){
      res.json({login:true})
   }else{
      res.json({login:false})
   }
})
}

const homePage=(req,res)=>{
   res.render('user/home.hbs')
}

module.exports={doSignup,loginPage,showSignup,doLogin,homePage}