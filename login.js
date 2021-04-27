
const mongoose=require('mongoose')
const User=require('../models/user')
const express = require('express')
const app = express();
const nodemailer = require('nodemailer');
const { getImage } = require('./imag');
const { query } = require('express');
//login
 const login=async(req,res)=>{
    console.log('body',req.body)
 try{
     debugger;
     const usere= await User.find({password:req.body.password, name:req.body.name}) 
    //  console.log(req.query.password)
    //  getImage(usere.myUser._id)
     res.status(200).json({massage:'user finde ',myUser:usere})
 }catch(error){
     res.status(400).send('error!!!!!')
 }
}
 const getAllUsers=async(req,res)=>{
 try{
    const users= await User.find()
    res.status(200).json({massage:'All users ',myUsers:users})
}catch(error){
    res.status(400).send('error!!!!!')
}}
 //register
const register=async(req,res)=>{
    debugger;
    // try{
    //     const usere= await User.findOne({name:req.query.name,password:req.query.password}) 
    //    console.log('user find')
    //     // res.status(200).json({massage:'user finde ',myUser:usere})
    // }catch(error){
    //     res.status(400).send('error!!!!!')
    // }
    console.log(req.body)
    // console.log(req.query.name)
    // req.body.name=req.query.name;
    // req.body.password=req.query.password;
    debugger;
    const newUser=new User(req.body)
    // newUser.save();

 try{
    await newUser.save();
    console.log('save');
     await newUser.save();
     res.status(200).json({massage:'user craeted',myUser:newUser})
     const mail = transporter.sendMail(mailOptions, function (error, info) {
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'y.shervy@gmail.com',
        //         pass: '211462650'
        //     }
        // });
        
        // var mailOptions = {
        //     from: 'y.shervy@gmail.com',
        //     to: 'y.shervy@gmail.com',
        //     subject: 'Sending Email using Node.js!!!!!!!!!!!!!!!!!!',
        //     text: 'ברוך הבא'
        // };
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

 }catch(error){
     res.status(400).send(error.massage)
 }
}
 module.exports={login,register,getAllUsers}