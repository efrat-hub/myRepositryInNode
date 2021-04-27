const Imag=require('../models/image')
const User=require('../models/user')
const request=require('request')
const { param } = require('../routes/api')

const requestApi=()=>
{
    return new Promise((resolve,reject)=>
    {
       let options={
           method:"GET",
         url : "https://api.nasa.gov/planetary/apod?api_key=F1rxl5RuQWd17nkz12vn84SooBvjLCUCmVyaEGmV"
     } 
     request(options,function(err,res,body){
         if(err)
         reject(err)
         else{
            console.log(body)
         resolve(body)}
         
     })
    })
}

const getImage=async(req,res)=>{
    try {
        const user=await User.findById(req.params.Id)
        requestApi().then(dataJ=>{
            const data=JSON.parse(dataJ)
            const image=new Imag({title:data.title,explanation:data.explanation,
            url:data.url,date:data.date,
            userId:user._id});
            console.log(data);
            image.save().then(p=>{
                user.images.push(image);
                user.save().then(user=>{
                    res.status(200).json({p})
                })
            })
        })
    } catch (error) {
        console.log('error')
    }
}
const getImages=async(req,res)=>{
    try {
        const user=await User.findById(req.params.Id).populate("images")
        console.log(user)
                    res.status(200).json(user)
    } catch (error) {
        console.log('error')
    }
}
const getUrl=async(req,res)=>{
    try {
        const imag=await Imag.findById(req.params.Id)
        console.log(imag)
                    res.status(200).json({"url":imag.url})
    } catch (error) {
        console.log('error')
    }
}
const addImage=async(req,res)=>{
    // console.log(req.body.JSON())
    // console.log(req.query)
    // console.log(req.params.Id)
    // console.log(req.body.requestOptions)
    console.log(req.body)
    // const data=JSON.parse(req.body)
    // console.log(data)
debugger;
    // try {
    //     const user=await User.findById(req.params.Id)
    //    req.body.requestOptions.body.then(dataJ=>{
    //         const data=JSON.parse(dataJ)
    //         console.log(data.url)
    //         const image=new Imag({title:data.title,explanation:data.media_type,
    //         url:data.url,date:data.date,
    //         userId:user._id});
    //         console.log(data);
    //         image.save().then(p=>{
    //             user.images.push(image);
    //             user.save().then(user=>{
    //                 res.status(200).json({p})
    //             })
    //         })
    //     })
    // } catch (error) {
    //     console.log('error')
    // }
}
const viewImg=async(req,res)=>{
    console.log(req.params.Id)
    try {
        console.log(req.params.Id)
        const img=await Imag.findById(req.params.Id)
        console.log(img)
                    res.status(200).json({"myImag": img.url})
    } catch (error) {
        console.log('error')
    }
}
module.exports={getImage,getImages,viewImg,addImage,getUrl}