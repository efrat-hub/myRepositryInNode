const mongoose=require('mongoose')
const image = require('../models/image')
const Task = require('../models/task')
const user=require('../models/user')

// const createTask=async(req,res)=>{
//     console.log(req.body)
//     const newTask=new image(req.body)
//  try{
//      await newTask.save();
//      res.status(200).json({massage:'task craeted',myTask:newTask})
//  }catch(error){
//      res.status(400).send(error.massage)
//  }
// }
module.exports={createTask}