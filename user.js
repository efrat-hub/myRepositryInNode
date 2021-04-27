const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:'efrat'
    },
    password:{
        type:Number,
        minlength:4,
        trim:true,
        require:true
    },
    images:[{
            type:mongoose.Schema.Types.ObjectId,ref:'image'
           }]
    
})
module.exports=mongoose.model('user',userSchema)