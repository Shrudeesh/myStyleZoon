const { response } = require('express')
const mongoose=require('mongoose')


const loginPage=(req,res)=>{
  res.render('admin/login.hbs')
}

const uploadPage=(req,res)=>{
    res.render('admin/upload.hbs')
}

const doSubmit=(req,res)=>{
  USER.find({Email:req.body.email,Password:req.body.password}).then((response)=>{
   console.log(response);
   if(response.length > 0){
      res.json({login:true})
   }else{
      res.json({login:false})
   }
})
}

module.exports={loginPage,uploadPage,doSubmit}