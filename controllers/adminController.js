const { response } = require('express')
const mongoose=require('mongoose')


const loginPage=(req,res)=>{
  res.render('admin/login.hbs')
}

const uploadPage=(req,res)=>{
    res.render('admin/upload.hbs')
}

const doSubmit=(req,res)=>{
  
}

module.exports={loginPage,uploadPage,doSubmit}