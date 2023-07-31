const express=require('express')
const app =express()
const path=require('path')
const hbs =require('hbs')
const connectDB=require('./config/dbConfig')


const user=require('./routes/user')
const admin=require('./routes/admin')

connectDB()
app.set('view-engine','hbs')
app.set('views',path.join(__dirname,'pages'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use('/',user)
app.use('/admin',admin)


app.listen(7000)