const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    heading:{
        type:String,
        require:true,
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    //createdBy:
    content:{
        type:String,
        require:true,
    },
    Images:[]
})
// const blogs =mongoose.Model("blogs",blogSchema)
const blogs=mongoose.model('blogs',blogSchema)
module.exports=blogs