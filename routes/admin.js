
const express=require('express')
const {loginPage,uploadPage,doSubmit}=require('../controllers/adminController')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('hii')
})

router.get('/login',loginPage)
router.get('/upload',uploadPage)
router.post('/admin',doSubmit)

module.exports=router