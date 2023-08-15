
const express=require('express')
const {loginPage,uploadPage,doSubmit,createBlog}=require('../controllers/adminController')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('hii')
})

router.get('/login',loginPage)
router.get('/upload',uploadPage)
router.post('/admin',doSubmit)
router.post('/createBlog',createBlog)
module.exports=router