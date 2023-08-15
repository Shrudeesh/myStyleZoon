const multer = require('multer');

const BLOGS=require('../models/blogSchema')



const loginPage=(req,res)=>{
  res.render('admin/login.hbs')
}

const uploadPage=(req,res)=>{
    res.render('admin/upload.hbs')
}

const doSubmit=(req,res)=>{
}

const createBlog=(req,res)=>{
   const fileStorage=multer.diskStorage({
      destination:(req,file,cb)=>{
         cb(null,"public/uploads");
      },
      filename:(req,files,cb)=>{
         cb(null,Date.now()+"-"+files.originalname)
      }
   })
   const upload=multer({storage:fileStorage}).array("images",4)
   upload(req,res,(err)=>{
      console.log(req.files)

    BLOGS({
      heading:req.body.category,
      content:req.body.content,
      Images:req.files,
   
   }).save().then(response=>{
      res.redrict("/admin/upload")
   })

   })
}

module.exports={loginPage,uploadPage,doSubmit,createBlog}