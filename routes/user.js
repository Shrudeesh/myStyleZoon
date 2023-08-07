

const express=require('express')
const { doSignup,loginPage,showSignup,doLogin,homePage} = require('../controllers/userController')
const router=express.Router()

router.get('/',loginPage)
router.get('/signup',showSignup)
router.post('/register',doSignup)
router.post('/login',doLogin)
router.get('/home',homePage)

module.exports=router