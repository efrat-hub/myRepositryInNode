const mongoose= require("mongoose");

const imageSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    explanation:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,ref:'user' 
     }
})
module.exports=mongoose.model('image',imageSchema)