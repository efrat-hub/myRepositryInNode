const mongoose=require('mongoose')
const user = require('../models/user')

const upDataUser=async(req,res)=>{
    try {
       console.log("body:",req.body,"id: ",req.params.userId)
       const users=await User.findByIdAndUpdate(req.params.userId,
           {password:req.body.password},{name:req.body.name})
        res.status(200).json({myUpDateUser:users,massage:"user update successfuly"})
    } catch (error) {
        res.status(400).send('error')
    }

}
const deleteUser=(req,res)=>{
   console.log(req.params.id)
   const usere=User.findByIdAndDelete(req.params.id,function(err,user){
       if(err)
           res.status(400).send('error')
       else
         if(user)
            res.status(200).json({massage:'user deleted successfuly',myUser:usere})
         else
            res.send('not exist')
   })
}
module.exports={deleteUser,upDataUser}